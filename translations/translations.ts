import { compoundedTranslations, letterSwapTranslations } from "./letterTranslations.js";
import { numberTranslations } from "./numberTranslations.js";
import { advancedPunctuationTranslations, punctuationTranslations } from "./punctuationTranslations.js";
import { scriptTranslations } from "./scriptTranslations.js";
import { smallTranslations } from "./smallTranslations.js";
import { fractionTranslations, superscriptTranslations } from "./superscriptTranslations.js";
import { upsideDownInvertedTranslations } from "./upsideDownInvertedTranslations.js";
import { otherTranslations } from "./otherTranslations.js";

import type { LeetSymbolTranslationObject } from "./types";

export const leetSymbolTranslations: LeetSymbolTranslationObject =
  Object.assign({},
    advancedPunctuationTranslations,
    compoundedTranslations,
    fractionTranslations,
    letterSwapTranslations,
    numberTranslations,
    punctuationTranslations,
    scriptTranslations,
    smallTranslations,
    superscriptTranslations,
    upsideDownInvertedTranslations,
    otherTranslations);

export const simpleTranslations: LeetSymbolTranslationObject = {};
export const complexTranslations: LeetSymbolTranslationObject = {};

export const leetSymbolTranslationKeys = Object.keys(leetSymbolTranslations);

for (const translationKey of leetSymbolTranslationKeys) {

  let isSimple =
    translationKey.length === 1 &&
    leetSymbolTranslations[translationKey].length === 1;

  if (isSimple) {

    // Scan all complex keys for the character
    for (const potentiallyComplexTranslationKey of leetSymbolTranslationKeys) {

      // If another translationKey contains the character
      if ((potentiallyComplexTranslationKey.includes(translationKey) &&
        potentiallyComplexTranslationKey !== translationKey)) {

        isSimple = false;
        break;
      }

      const potentiallyMatchingReplacementValues =
        leetSymbolTranslations[potentiallyComplexTranslationKey];

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
  } else {
    complexTranslations[translationKey] = leetSymbolTranslations[translationKey];
  }
}
