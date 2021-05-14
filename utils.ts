import { leetSymbolTranslationKeys } from "./translations/translations.js";


export const isLetter = (potentialLetter: string) => {
  if ("abcdefghijklmnopqrstuvwxyz".includes(potentialLetter)) {
    return true;
  }
  return false;
};


export const indiciesOf = (sourceString: string, searchString: string) => {

  const indicies: number[] = [];

  for (let index = 0; index < sourceString.length - searchString.length; index += 1) {

    if (sourceString.substring(index, searchString.length + index) === searchString) {
      indicies.push(index);
    }
  }

  return indicies;
};


export const isPotentialLeet = (potentialLeetString: string) => {

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


export const combineStringArrays = (stringArrays: string[][], stringPrefix: string = "", stringPrefixArrayIndex: number = -1): string[] => {

  if (stringPrefixArrayIndex === stringArrays.length - 1) {
    return [stringPrefix];
  }

  const results: string[] = [];

  for (let stringArrayIndex = stringPrefixArrayIndex + 1; stringArrayIndex < stringArrays.length; stringArrayIndex += 1) {

    for (const newPrefixPiece of stringArrays[stringArrayIndex]) {

      const newPrefix = (stringPrefix + " " + newPrefixPiece).trim();

      results.push(...combineStringArrays(stringArrays, newPrefix, stringArrayIndex));
    }
  }

  return results;
};
