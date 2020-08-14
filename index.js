"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unleet = void 0;
const diacritic = require("diacritic");
const translations_1 = require("./translations/translations");
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
            const translations = translations_1.complexTranslations[leetSymbol];
            for (const translation of translations) {
                const newString = lowerCaseLeetString.replace(leetSymbol, translation);
                if (!previousStrings.has(newString)) {
                    previousStrings.add(newString);
                    unleetRecurse(newString, unleetStrings, previousStrings, complexTranslationKeys);
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
exports.unleet = (leetString) => {
    let cleanLeetString = leetString.toLowerCase();
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
