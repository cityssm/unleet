import { compoundedTranslations, letterSwapTranslations } from "./letterTranslations";
import { numberTranslations } from "./numberTranslations";
import { advancedPunctuationTranslations, punctuationTranslations } from "./punctuationTranslations";
import { scriptTranslations } from "./scriptTranslations";
import { smallTranslations } from "./smallTranslations";
import { fractionTranslations, superscriptTranslations } from "./superscriptTranslations";
import { upsideDownInvertedTranslations } from "./upsideDownInvertedTranslations";
import { otherTranslations } from "./otherTranslations";

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
