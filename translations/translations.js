import { compoundedTranslations, letterSwapTranslations } from "./letterTranslations.js";
import { numberTranslations } from "./numberTranslations.js";
import { advancedPunctuationTranslations, punctuationTranslations } from "./punctuationTranslations.js";
import { scriptTranslations } from "./scriptTranslations.js";
import { smallTranslations } from "./smallTranslations.js";
import { fractionTranslations, superscriptTranslations } from "./superscriptTranslations.js";
import { upsideDownInvertedTranslations } from "./upsideDownInvertedTranslations.js";
import { otherTranslations } from "./otherTranslations.js";
export const leetSymbolTranslations = Object.assign({}, advancedPunctuationTranslations, compoundedTranslations, fractionTranslations, letterSwapTranslations, numberTranslations, punctuationTranslations, scriptTranslations, smallTranslations, superscriptTranslations, upsideDownInvertedTranslations, otherTranslations);
export const simpleTranslations = {};
export const complexTranslations = {};
export const leetSymbolTranslationKeys = Object.keys(leetSymbolTranslations);
for (const translationKey of leetSymbolTranslationKeys) {
    let isSimple = translationKey.length === 1 &&
        leetSymbolTranslations[translationKey].length === 1;
    if (isSimple) {
        for (const potentiallyComplexTranslationKey of leetSymbolTranslationKeys) {
            if ((potentiallyComplexTranslationKey.includes(translationKey) &&
                potentiallyComplexTranslationKey !== translationKey)) {
                isSimple = false;
                break;
            }
            const potentiallyMatchingReplacementValues = leetSymbolTranslations[potentiallyComplexTranslationKey];
            for (const potentialValue of potentiallyMatchingReplacementValues) {
                if (potentialValue.includes(translationKey)) {
                    isSimple = false;
                    break;
                }
            }
        }
    }
    if (isSimple) {
        simpleTranslations[translationKey] = leetSymbolTranslations[translationKey];
    }
    else {
        complexTranslations[translationKey] = leetSymbolTranslations[translationKey];
    }
}
