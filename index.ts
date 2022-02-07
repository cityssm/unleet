import { remove as removeDiacritics } from "diacritics";
import * as utils from "./utils.js";

import { simpleTranslations, complexTranslations } from "./translations.js";


const unleetRecurse = (lowerCaseLeetString: string,
  unleetStrings: Set<string>,
  previousStrings: Set<string>,
  complexTranslationKeys: string[]) => {

  // Loop through the leet symbols
  for (const leetSymbol of complexTranslationKeys) {

    // If the current leet symbol is found in the string
    if (lowerCaseLeetString.includes(leetSymbol)) {

      let matchingIndicies = utils.indiciesOf(lowerCaseLeetString, leetSymbol);

      if (matchingIndicies.length === 0) {
        matchingIndicies = [lowerCaseLeetString.indexOf(leetSymbol)];
      }

      const translations = complexTranslations[leetSymbol];

      // Loop through the translations for the current leet symbol
      for (const translation of translations) {

        for (const symbolIndex of matchingIndicies) {

          const newString = lowerCaseLeetString.slice(0, Math.max(0, symbolIndex)) +
            translation +
            lowerCaseLeetString.slice(Math.max(0, symbolIndex + leetSymbol.length));

          // If the translation has not been seen before
          if (!previousStrings.has(newString)) {
            previousStrings.add(newString);
            unleetRecurse(newString, unleetStrings, previousStrings, complexTranslationKeys);
          }
        }
      }
    }
  }

  // If no leet symbols exist in the string that are able to be translated
  if (!utils.isPotentialLeet(lowerCaseLeetString)) {
    unleetStrings.add(lowerCaseLeetString);
    return unleetStrings;
  }

  return unleetStrings;
};


export const unleet = (leetString: string | number): string[] => {

  if (leetString === null || leetString === undefined || leetString === "") {
    return [""];
  }

  // Ensure the input is a string
  let cleanLeetString = leetString.toString();

  // Remove periods
  cleanLeetString = cleanLeetString.replace(/\./g, " ");

  // Replace all space characters with the normal space character
  cleanLeetString = cleanLeetString.replace(utils.whitespaceCharactersRegex, " ");

  // Remove multiple spaces
  cleanLeetString = cleanLeetString.replace(/ +/g, " ");

  // Remove accents
  cleanLeetString = removeDiacritics(cleanLeetString);

  // Convert to lower case
  cleanLeetString = cleanLeetString.toLowerCase();

  // Do simple translations
  for (const leetSymbol of Object.keys(simpleTranslations)) {
    while (cleanLeetString.includes(leetSymbol)) {
      cleanLeetString = cleanLeetString.replace(leetSymbol, simpleTranslations[leetSymbol][0]);
    }
  }

  // Simplify the complexTranslationKeys list (reduces amount of recursion)
  const complexTranslationKeys = Object.keys(complexTranslations).filter(function(leetSymbol) {
    return cleanLeetString.includes(leetSymbol);
  });

  const cleanLeetStringSplit = cleanLeetString.split(" ");

  const unleetResults: string[][] = [];

  for (const [cleanLeetPieceIndex, cleanLeetStringPiece] of cleanLeetStringSplit.entries()) {
    unleetResults[cleanLeetPieceIndex] = [...unleetRecurse(cleanLeetStringPiece.trim(), new Set(), new Set(), complexTranslationKeys)];
  }

  if (unleetResults.length === 1) {
    return unleetResults[0];
  }

  return utils.combineStringArrays(unleetResults);
};


export default unleet;
