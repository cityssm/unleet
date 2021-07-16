import { translationSymbols } from "./translations.js";
const whitespaceCharactersList = [
    " ",
    String.fromCharCode(160),
    String.fromCharCode(8201),
    String.fromCharCode(8194),
    String.fromCharCode(8195)
];
export const whitespaceCharactersRegex = new RegExp("[" + whitespaceCharactersList.join("") + "]", "g");
export const isLetter = (potentialLetter) => {
    if ("abcdefghijklmnopqrstuvwxyz".includes(potentialLetter)) {
        return true;
    }
    return false;
};
export const indiciesOf = (sourceString, searchString) => {
    const indicies = [];
    for (let index = 0; index < sourceString.length - searchString.length; index += 1) {
        if (sourceString.slice(index, searchString.length + index) === searchString) {
            indicies.push(index);
        }
    }
    return indicies;
};
export const isPotentialLeet = (potentialLeetString) => {
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
export const combineStringArrays = (stringArrays, stringPrefix = "") => {
    if (stringArrays.length === 0) {
        return [stringPrefix];
    }
    const prefixArray = stringArrays[0];
    const suffixArrays = stringArrays.slice(1);
    const results = [];
    for (const newPrefixPiece of prefixArray) {
        const newPrefix = (stringPrefix + " " + newPrefixPiece).trim();
        results.push(...combineStringArrays(suffixArrays, newPrefix));
    }
    return results;
};
