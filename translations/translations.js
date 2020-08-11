"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leetSymbolTranslationKeys = exports.complexTranslations = exports.simpleTranslations = exports.leetSymbolTranslations = void 0;
const letterTranslations_1 = require("./letterTranslations");
const numberTranslations_1 = require("./numberTranslations");
const punctuationTranslations_1 = require("./punctuationTranslations");
const scriptTranslations_1 = require("./scriptTranslations");
const smallTranslations_1 = require("./smallTranslations");
const superscriptTranslations_1 = require("./superscriptTranslations");
const upsideDownInvertedTranslations_1 = require("./upsideDownInvertedTranslations");
const otherTranslations_1 = require("./otherTranslations");
exports.leetSymbolTranslations = Object.assign({}, punctuationTranslations_1.advancedPunctuationTranslations, letterTranslations_1.compoundedTranslations, superscriptTranslations_1.fractionTranslations, letterTranslations_1.letterSwapTranslations, numberTranslations_1.numberTranslations, punctuationTranslations_1.punctuationTranslations, scriptTranslations_1.scriptTranslations, smallTranslations_1.smallTranslations, superscriptTranslations_1.superscriptTranslations, upsideDownInvertedTranslations_1.upsideDownInvertedTranslations, otherTranslations_1.otherTranslations);
exports.simpleTranslations = {};
exports.complexTranslations = {};
exports.leetSymbolTranslationKeys = Object.keys(exports.leetSymbolTranslations);
for (const translationKey of exports.leetSymbolTranslationKeys) {
    let isSimple = translationKey.length === 1 &&
        exports.leetSymbolTranslations[translationKey].length === 1;
    if (isSimple) {
        for (const potentiallyComplexTranslationKey of exports.leetSymbolTranslationKeys) {
            if ((potentiallyComplexTranslationKey.includes(translationKey) &&
                potentiallyComplexTranslationKey !== translationKey)) {
                isSimple = false;
                break;
            }
            const potentiallyMatchingReplacementValues = exports.leetSymbolTranslations[potentiallyComplexTranslationKey];
            for (const potentialValue of potentiallyMatchingReplacementValues) {
                if (potentialValue.includes(translationKey)) {
                    isSimple = false;
                    break;
                }
            }
        }
    }
    if (isSimple) {
        exports.simpleTranslations[translationKey] = exports.leetSymbolTranslations[translationKey];
    }
    else {
        exports.complexTranslations[translationKey] = exports.leetSymbolTranslations[translationKey];
    }
}
