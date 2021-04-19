import diacritic from "diacritic";
import { leetSymbolTranslationKeys, simpleTranslations, complexTranslations } from "./translations/translations.js";
const indiciesOf = (sourceString, searchString) => {
    const indicies = [];
    for (let index = 0; index < sourceString.length - searchString.length; index += 1) {
        if (sourceString.substring(index, searchString.length + index) === searchString) {
            indicies.push(index);
        }
    }
    return indicies;
};
const isLetter = (potentialLetter) => {
    if ("abcdefghijklmnopqrstuvwxyz".includes(potentialLetter)) {
        return true;
    }
    return false;
};
const isPotentialLeet = (potentialLeetString) => {
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
const unleetRecurse = (lowerCaseLeetString, unleetStrings, previousStrings, complexTranslationKeys) => {
    for (const leetSymbol of complexTranslationKeys) {
        if (lowerCaseLeetString.includes(leetSymbol)) {
            let matchingIndicies = indiciesOf(lowerCaseLeetString, leetSymbol);
            if (matchingIndicies.length === 0) {
                matchingIndicies = [lowerCaseLeetString.indexOf(leetSymbol)];
            }
            const translations = complexTranslations[leetSymbol];
            for (const translation of translations) {
                for (const symbolIndex of matchingIndicies) {
                    const newString = lowerCaseLeetString.substring(0, symbolIndex) +
                        translation + lowerCaseLeetString.substring(symbolIndex + leetSymbol.length);
                    if (!previousStrings.has(newString)) {
                        previousStrings.add(newString);
                        unleetRecurse(newString, unleetStrings, previousStrings, complexTranslationKeys);
                    }
                }
            }
        }
    }
    if (!isPotentialLeet(lowerCaseLeetString)) {
        unleetStrings.add(lowerCaseLeetString);
        return unleetStrings;
    }
    return unleetStrings;
};
export const unleet = (leetString) => {
    if (leetString === null || leetString === undefined || leetString === "") {
        return [""];
    }
    let cleanLeetString = (leetString + "").toLowerCase();
    cleanLeetString = cleanLeetString.replace(/\./g, " ");
    cleanLeetString = cleanLeetString.replace(/ +/g, " ");
    cleanLeetString = diacritic.clean(cleanLeetString);
    for (const leetSymbol of Object.keys(simpleTranslations)) {
        while (cleanLeetString.includes(leetSymbol)) {
            cleanLeetString = cleanLeetString.replace(leetSymbol, simpleTranslations[leetSymbol][0]);
        }
    }
    const complexTranslationKeys = Object.keys(complexTranslations).filter(function (leetSymbol) {
        return cleanLeetString.includes(leetSymbol);
    });
    return Array.from(unleetRecurse(cleanLeetString.trim(), new Set(), new Set(), complexTranslationKeys));
};
