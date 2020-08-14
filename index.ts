import * as diacritic from "diacritic";

import { leetSymbolTranslationKeys, simpleTranslations, complexTranslations } from "./translations/translations";


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

      const translations = complexTranslations[leetSymbol];

      // Loop through the translations for the current leet symbol
      for (const translation of translations) {

        // Create a new string with the current translation
        const newString = lowerCaseLeetString.replace(leetSymbol, translation);

        // If the translation has not been seen before
        if (!previousStrings.has(newString)) {
          previousStrings.add(newString);
          unleetRecurse(newString, unleetStrings, previousStrings, complexTranslationKeys);
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


export const unleet = (leetString: string) => {

  // Convert to lower case
  let cleanLeetString = leetString.toLowerCase();

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
