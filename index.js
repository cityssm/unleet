"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unleet = void 0;
const removeAccents = require("remove-accents");
const leetTranslations_1 = require("./leetTranslations");
const isLetter = (potentialLetter) => {
    if ("abcdefghijklmnopqrstuvwxyz".includes(potentialLetter)) {
        return true;
    }
    return false;
};
const isPotentialLeet = (potentialLeetString) => {
    for (const leetSymbol of leetTranslations_1.leetSymbolTranslationKeys) {
        if (isLetter(leetSymbol)) {
            continue;
        }
        if (potentialLeetString.includes(leetSymbol)) {
            return true;
        }
    }
    return false;
};
const unleetRecurse = (lowerCaseLeetString, deleetStrings, previousStrings) => {
    for (const leetSymbol of Object.keys(leetTranslations_1.complexTranslations)) {
        if (lowerCaseLeetString.includes(leetSymbol)) {
            const translations = leetTranslations_1.complexTranslations[leetSymbol];
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
exports.unleet = (leetString) => {
    let cleanLeetString = leetString.toLowerCase();
    cleanLeetString = cleanLeetString.replace(/\./g, " ");
    cleanLeetString = cleanLeetString.replace(/ +/g, " ");
    cleanLeetString = removeAccents(cleanLeetString);
    for (const leetSymbol of Object.keys(leetTranslations_1.simpleTranslations)) {
        while (cleanLeetString.includes(leetSymbol)) {
            cleanLeetString = cleanLeetString.replace(leetSymbol, leetTranslations_1.simpleTranslations[leetSymbol][0]);
        }
    }
    console.log("Recurse value: " + cleanLeetString);
    return Array.from(unleetRecurse(cleanLeetString.trim(), new Set(), new Set()));
};
