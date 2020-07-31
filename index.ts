import * as removeAccents from "remove-accents";
import { leetSymbolTranslationKeys, simpleTranslations, complexTranslations } from "./leetTranslations";


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


const unleetRecurse = (lowerCaseLeetString: string, deleetStrings: Set<string>, previousStrings: Set<string>) => {

  for (const leetSymbol of Object.keys(complexTranslations)) {
    if (lowerCaseLeetString.includes(leetSymbol)) {

      const translations = complexTranslations[leetSymbol];

      for (const translation of translations) {

        const newString = lowerCaseLeetString.replace(leetSymbol, translation);

        if (!previousStrings.has(newString)) {
          previousStrings.add(newString);
          unleetRecurse(newString, deleetStrings, previousStrings);
        }
      }
    }
  }

  if (!isPotentialLeet(lowerCaseLeetString)) {
    deleetStrings.add(lowerCaseLeetString);
    return deleetStrings;
  }

  return deleetStrings;
};


export const unleet = (leetString: string) => {

  // convert to lower case
  let cleanLeetString = leetString.toLowerCase();

  // remove periods
  cleanLeetString = cleanLeetString.replace(/\./g, " ");

  // remove multiple spaces
  cleanLeetString = cleanLeetString.replace(/ +/g, " ");

  // remove accents
  cleanLeetString = removeAccents(cleanLeetString);

  // do simple translations

  for (const leetSymbol of Object.keys(simpleTranslations)) {

    while (cleanLeetString.includes(leetSymbol)) {
      cleanLeetString = cleanLeetString.replace(leetSymbol, simpleTranslations[leetSymbol][0]);
    }
  }

  console.log("Recurse value: " + cleanLeetString);

  return Array.from(unleetRecurse(cleanLeetString.trim(), new Set(), new Set()));
};
