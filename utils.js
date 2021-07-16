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
export const combineStringArrays = (stringArrays) => {
    if (stringArrays.length <= 1) {
        return stringArrays[0];
    }
    const array1 = stringArrays[0];
    const array2 = stringArrays[1];
    const newArray = [];
    for (const value1 of array1) {
        for (const value2 of array2) {
            newArray.push(value1 + " " + value2);
        }
    }
    return combineStringArrays([newArray, ...stringArrays.slice(2)]);
};
