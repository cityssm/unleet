import * as diacritic from "diacritic";

import { leetSymbolTranslationKeys, simpleTranslations, complexTranslations } from "./translations/translations";


const indiciesOf = (sourceString: string, searchString: string) => {

  const indicies: number[] = [];

  for (let index = 0; index < sourceString.length - searchString.length; index += 1) {

    if (sourceString.substring(index, searchString.length + index) === searchString) {
      indicies.push(index);
    }
  }

  return indicies;
};


const isLetter = (potentialLetter: string) => {
  if ("abcdefghijklmnopqrstuvwxyz".includes(potentialLetter)) {
    return true;
  }
  return false;
};


const isPotentialLeet = (potentialLeetString: string) => {

  for (const leetSymbol of leetSymbolTranslationKeys) {

    if (isLetter(leetSymbol)) {
      continue;
    }

    if (potentialLeetString.includes(leetSymbol)) {
      return true;
    }
  }

  return false;
};


const unleetRecurse = (lowerCaseLeetString: string,
  unleetStrings: Set<string>,
  previousStrings: Set<string>,
  complexTranslationKeys: string[]) => {

  // Loop through the leet symbols
  for (const leetSymbol of complexTranslationKeys) {

    // If the current leet symbol is found in the string
    if (lowerCaseLeetString.includes(leetSymbol)) {

      let matchingIndicies = indiciesOf(lowerCaseLeetString, leetSymbol);

      if (matchingIndicies.length === 0) {
        matchingIndicies = [lowerCaseLeetString.indexOf(leetSymbol)];
      }

      const translations = complexTranslations[leetSymbol];

      // Loop through the translations for the current leet symbol
      for (const translation of translations) {

        for (const symbolIndex of matchingIndicies) {

          const newString = lowerCaseLeetString.substring(0, symbolIndex) +
            translation + lowerCaseLeetString.substring(symbolIndex + leetSymbol.length);

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
  if (!isPotentialLeet(lowerCaseLeetString)) {
    unleetStrings.add(lowerCaseLeetString);
    return unleetStrings;
  }

  return unleetStrings;
};


export const unleet = (leetString: string): string[] => {

  if (leetString === null || leetString === undefined || leetString === "") {
    return [""];
  }

  // Convert to lower case
  let cleanLeetString = (leetString + "").toLowerCase();

  // Remove periods
  cleanLeetString = cleanLeetString.replace(/\./g, " ");

  // Remove multiple spaces
  cleanLeetString = cleanLeetString.replace(/ +/g, " ");

  // Remove accents
  cleanLeetString = diacritic.clean(cleanLeetString);

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

  return Array.from(unleetRecurse(cleanLeetString.trim(), new Set(), new Set(), complexTranslationKeys));
};
