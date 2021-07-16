import { normalizeSync } from "normalize-diacritics";
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

  // Convert to lower case
  let cleanLeetString = leetString.toString().toLowerCase();

  // Remove periods
  cleanLeetString = cleanLeetString.replace(/\./g, " ");

  // Replace all space characters with the normal space character
  cleanLeetString = cleanLeetString.replace(utils.whitespaceCharactersRegex, " ");

  // Remove multiple spaces
  cleanLeetString = cleanLeetString.replace(/ +/g, " ");

  // Remove accents
  cleanLeetString = normalizeSync(cleanLeetString);

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

  for (const cleanLeetStringPiece of cleanLeetStringSplit) {
    unleetResults.push([...unleetRecurse(cleanLeetStringPiece.trim(), new Set(), new Set(), complexTranslationKeys)]);
  }

  if (unleetResults.length === 1) {
    return unleetResults[0];
  }

  return utils.combineStringArrays(unleetResults);
};


export default unleet;
