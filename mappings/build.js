import * as fs from "fs";
import { mappings } from "./mappings.js";
const translations = {};
for (const letter of Object.keys(mappings)) {
    const cleanLetter = letter.trim().toLowerCase();
    for (const [symbolIndex, symbol] of mappings[letter].entries()) {
        const cleanSymbol = symbol.trim().toLowerCase();
        if (!translations[cleanSymbol]) {
            translations[cleanSymbol] = [];
        }
        if (translations[cleanSymbol].includes(cleanLetter)) {
            console.warn("Duplicate mapping ignored: " + letter + "[" + symbolIndex.toString() + "] = \"" + symbol + "\"");
        }
        else {
            translations[cleanSymbol].push(cleanLetter);
        }
    }
}
const simpleTranslations = {};
const complexTranslations = {};
const translationKeys = Object.keys(translations);
for (const translationKey of translationKeys) {
    let isSimple = translationKey.length === 1 &&
        translations[translationKey].length === 1;
    if (isSimple) {
        for (const potentiallyComplexTranslationKey of translationKeys) {
            if ((potentiallyComplexTranslationKey.includes(translationKey) &&
                potentiallyComplexTranslationKey !== translationKey)) {
                isSimple = false;
                break;
            }
            const potentiallyMatchingReplacementValues = translations[potentiallyComplexTranslationKey];
            for (const potentialValue of potentiallyMatchingReplacementValues) {
                if (potentialValue.includes(translationKey)) {
                    isSimple = false;
                    break;
                }
            }
        }
    }
    if (isSimple) {
        simpleTranslations[translationKey] = translations[translationKey];
    }
    else {
        complexTranslations[translationKey] = translations[translationKey];
    }
}
const output = {
    simpleTranslations,
    complexTranslations
};
try {
    fs.writeFile("./translations.json", JSON.stringify(output), {}, () => {
        console.log("translations.json written.");
    });
}
catch (error) {
    console.error(error);
}
