import * as removeAccents from "remove-accents";
import { leetSymbolTranslations } from "./leetTranslations";


const leetSymbols = Object.keys(leetSymbolTranslations);


const isLetter = (potentialLetter: string) => {
  if ("abcdefghijklmnopqrstuvwxyz".includes(potentialLetter)) {
    return true;
  }
  return false;
};


export const isPotentialLeet = (potentialLeetString: string) => {

  for (const leetSymbol of leetSymbols) {

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

  for (const leetSymbol of leetSymbols) {
    if (lowerCaseLeetString.includes(leetSymbol)) {

      const translations = leetSymbolTranslations[leetSymbol];

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

  // switch underscores to hyphens
  cleanLeetString = cleanLeetString.replace(/_/g, "-");

  // remove multiple spaces
  cleanLeetString = cleanLeetString.replace(/ +/g, " ");

  // remove accents
  cleanLeetString = removeAccents(cleanLeetString);

  return Array.from(unleetRecurse(cleanLeetString.trim(), new Set(), new Set()));
};
