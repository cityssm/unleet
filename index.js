"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unleet = void 0;
const diacritic = require("diacritic");
const translations_1 = require("./translations/translations");
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
    for (const leetSymbol of translations_1.leetSymbolTranslationKeys) {
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
            const translations = translations_1.complexTranslations[leetSymbol];
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
const unleet = (leetString) => {
    if (leetString === null || leetString === undefined || leetString === "") {
        return [""];
    }
    let cleanLeetString = (leetString + "").toLowerCase();
    cleanLeetString = cleanLeetString.replace(/\./g, " ");
    cleanLeetString = cleanLeetString.replace(/ +/g, " ");
    cleanLeetString = diacritic.clean(cleanLeetString);
    for (const leetSymbol of Object.keys(translations_1.simpleTranslations)) {
        while (cleanLeetString.includes(leetSymbol)) {
            cleanLeetString = cleanLeetString.replace(leetSymbol, translations_1.simpleTranslations[leetSymbol][0]);
        }
    }
    const complexTranslationKeys = Object.keys(translations_1.complexTranslations).filter(function (leetSymbol) {
        return cleanLeetString.includes(leetSymbol);
    });
    return Array.from(unleetRecurse(cleanLeetString.trim(), new Set(), new Set(), complexTranslationKeys));
};
exports.unleet = unleet;
