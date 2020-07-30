"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unleet = exports.isPotentialLeet = void 0;
const leetTranslations_1 = require("./leetTranslations");
const leetSymbols = Object.keys(leetTranslations_1.leetSymbolTranslations);
const isLetter = (potentialLetter) => {
    if ("abcdefghijklmnopqrstuvwxyz".includes(potentialLetter)) {
        return true;
    }
    return false;
};
exports.isPotentialLeet = (potentialLeetString) => {
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
const unleetRecurse = (lowerCaseLeetString, deleetStrings, previousStrings) => {
    for (const leetSymbol of leetSymbols) {
        if (lowerCaseLeetString.includes(leetSymbol)) {
            const translations = leetTranslations_1.leetSymbolTranslations[leetSymbol];
            for (const translation of translations) {
                const newString = lowerCaseLeetString.replace(leetSymbol, translation);
                if (!previousStrings.has(newString)) {
                    previousStrings.add(newString);
                    unleetRecurse(newString, deleetStrings, previousStrings);
                }
            }
        }
    }
    if (!exports.isPotentialLeet(lowerCaseLeetString)) {
        deleetStrings.add(lowerCaseLeetString);
        return deleetStrings;
    }
    return deleetStrings;
};
exports.unleet = (leetString) => {
    let cleanLeetString = leetString.replace(/\./g, " ");
    cleanLeetString = cleanLeetString.replace(/_/g, "-");
    cleanLeetString = cleanLeetString.replace(/ +/g, " ");
    return Array.from(unleetRecurse(cleanLeetString.toLowerCase(), new Set(), new Set()));
};
