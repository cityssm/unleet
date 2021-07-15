import { translationSymbols } from "./translations.js";


export const isLetter = (potentialLetter: string): boolean => {
  if ("abcdefghijklmnopqrstuvwxyz".includes(potentialLetter)) {
    return true;
  }
  return false;
};


export const indiciesOf = (sourceString: string, searchString: string): number[] => {

  const indicies: number[] = [];

  for (let index = 0; index < sourceString.length - searchString.length; index += 1) {

    if (sourceString.slice(index, searchString.length + index) === searchString) {
      indicies.push(index);
    }
  }

  return indicies;
};


export const isPotentialLeet = (potentialLeetString: string): boolean => {

  for (const leetSymbol of translationSymbols) {

    if (isLetter(leetSymbol)) {
      continue;
    }

    if (potentialLeetString.includes(leetSymbol)) {
      return true;
    }
  }

  return false;
};


export const combineStringArrays = (stringArrays: string[][], stringPrefix = ""): string[] => {

  if (stringArrays.length === 0) {
    return [stringPrefix];
  }

  const prefixArray = stringArrays[0];

  const suffixArrays = stringArrays.slice(1);

  const results: string[] = [];

  for (const newPrefixPiece of prefixArray) {

    const newPrefix = (stringPrefix + " " + newPrefixPiece).trim();

    results.push(...combineStringArrays(suffixArrays, newPrefix));
  }

  return results;
};
