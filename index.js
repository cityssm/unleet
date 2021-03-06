import { normalizeSync } from "normalize-diacritics";
import * as utils from "./utils.js";
import { simpleTranslations, complexTranslations } from "./translations/translations.js";
const unleetRecurse = (lowerCaseLeetString, unleetStrings, previousStrings, complexTranslationKeys) => {
    for (const leetSymbol of complexTranslationKeys) {
        if (lowerCaseLeetString.includes(leetSymbol)) {
            let matchingIndicies = utils.indiciesOf(lowerCaseLeetString, leetSymbol);
            if (matchingIndicies.length === 0) {
                matchingIndicies = [lowerCaseLeetString.indexOf(leetSymbol)];
            }
            const translations = complexTranslations[leetSymbol];
            for (const translation of translations) {
                for (const symbolIndex of matchingIndicies) {
                    const newString = lowerCaseLeetString.slice(0, Math.max(0, symbolIndex)) +
                        translation +
                        lowerCaseLeetString.slice(Math.max(0, symbolIndex + leetSymbol.length));
                    if (!previousStrings.has(newString)) {
                        previousStrings.add(newString);
                        unleetRecurse(newString, unleetStrings, previousStrings, complexTranslationKeys);
                    }
                }
            }
        }
    }
    if (!utils.isPotentialLeet(lowerCaseLeetString)) {
        unleetStrings.add(lowerCaseLeetString);
        return unleetStrings;
    }
    return unleetStrings;
};
export const unleet = (leetString) => {
    if (leetString === null || leetString === undefined || leetString === "") {
        return [""];
    }
    let cleanLeetString = leetString.toString().toLowerCase();
    cleanLeetString = cleanLeetString.replace(/\./g, " ");
    cleanLeetString = cleanLeetString.replace(/ +/g, " ");
    cleanLeetString = normalizeSync(cleanLeetString);
    for (const leetSymbol of Object.keys(simpleTranslations)) {
        while (cleanLeetString.includes(leetSymbol)) {
            cleanLeetString = cleanLeetString.replace(leetSymbol, simpleTranslations[leetSymbol][0]);
        }
    }
    const complexTranslationKeys = Object.keys(complexTranslations).filter(function (leetSymbol) {
        return cleanLeetString.includes(leetSymbol);
    });
    const cleanLeetStringSplit = cleanLeetString.split(" ");
    const unleetResults = [];
    for (const cleanLeetStringPiece of cleanLeetStringSplit) {
        unleetResults.push([...unleetRecurse(cleanLeetStringPiece.trim(), new Set(), new Set(), complexTranslationKeys)]);
    }
    if (unleetResults.length === 1) {
        return unleetResults[0];
    }
    return utils.combineStringArrays(unleetResults);
};
export default unleet;
