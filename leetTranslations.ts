interface LeetSymbolTranslationObject { [symbol: string]: string[] };

const advancedCompositeTranslations: LeetSymbolTranslationObject = {
  "/-\\": ["a"],
  "[3": ["b"],
  "[)": ["d"],
  "|=": ["f"],
  "|-|": ["h"],
  "\\": ["i", "l"],
  "/": ["i", "l"],
  "_|": ["j"],
  "|<": ["k"],
  "|_": ["l"],
  "/\\/\\": ["m"],
  "|\\/|": ["m"],
  "/\\/": ["n"],
  "|\\|": ["n"],
  "|v": ["n"],
  "[]": ["n"],
  "|*": ["p"],
  "|d": ["p"],
  "(_,)": ["q"],
  "/2": ["r"],
  "'|'": ["t"],
  "(_)": ["u"],
  "|_|": ["u"],
  "\\/": ["v"],
  "|/": ["v"],
  "\\/\\/": ["w"],
  "\\|/": ["w"],
  "><": ["x"]
};

const balloonTranslations: LeetSymbolTranslationObject = {
  "Ⓐ": ["a"],
  "ⓐ": ["a"],
  "Ⓑ": ["b"],
  "ⓑ": ["b"],
  "Ⓒ": ["c"],
  "ⓒ": ["c"],
  "Ⓓ": ["d"],
  "ⓓ": ["d"],
  "Ⓔ": ["e"],
  "ⓔ": ["e"],
  "Ⓕ": ["f"],
  "ⓕ": ["f"],
  "Ⓖ": ["g"],
  "ⓖ": ["g"],
  "Ⓗ": ["h"],
  "ⓗ": ["h"],
  "Ⓘ": ["i"],
  "ⓘ": ["i"],
  "Ⓙ": ["j"],
  "ⓙ": ["j"],
  "Ⓚ": ["k"],
  "ⓚ": ["k"],
  "Ⓛ": ["l"],
  "ⓛ": ["l"],
  "Ⓜ": ["m"],
  "ⓜ": ["m"],
  "Ⓝ": ["n"],
  "ⓝ": ["n"],
  "Ⓞ": ["o"],
  "ⓞ": ["o"],
  "Ⓟ": ["p"],
  "ⓟ": ["p"],
  "Ⓠ": ["q"],
  "ⓠ": ["q"],
  "Ⓡ": ["r"],
  "ⓡ": ["r"],
  "Ⓢ": ["s"],
  "ⓢ": ["s"],
  "Ⓣ": ["t"],
  "ⓣ": ["t"],
  "Ⓤ": ["u"],
  "ⓤ": ["u"],
  "Ⓥ": ["v"],
  "ⓥ": ["v"],
  "Ⓦ": ["w"],
  "ⓦ": ["w"],
  "Ⓧ": ["x"],
  "ⓧ": ["x"],
  "Ⓨ": ["y"],
  "ⓨ": ["y"],
  "Ⓩ": ["z"],
  "ⓩ": ["z"]
};

const compoundedTranslations: LeetSymbolTranslationObject = {
  "æ": ["ae"],
  "ǣ": ["ae"],
  "ǽ": ["ae"],
  "ȸ": ["db", "ob", "do"],
  "Ǆ": ["dz"],
  "ǅ": ["dz"],
  "ǆ": ["dz"],
  "Ǳ": ["dz"],
  "ǲ": ["dz"],
  "ǳ": ["dz"],
  "℔": ["lb"],
  "Ǉ": ["lj"],
  "ǈ": ["lj"],
  "ǉ": ["lj", "ij"],
  "Ǌ": ["nj"],
  "ǋ": ["nj"],
  "ǌ": ["nj"],
  "œ": ["oe"],
  "ȹ": ["qp", "op", "qo"]
};

const fractionTranslations: LeetSymbolTranslationObject = {
  "½": ["12"],
  "¼": ["14"],
  "¾": ["34"],
  "℀": ["ac"],
  "℁": ["as"],
  "⅍": ["as"],
  "℅": ["co"],
  "℆": ["cu"]
};

const letterSwapTranslations: LeetSymbolTranslationObject = {
  "s": ["z"],
  "z": ["s"]
};

const numberTranslations: LeetSymbolTranslationObject = {
  "1": ["i", "l"],
  "2": ["z"],
  "ƻ": ["2"],
  "3": ["e"],
  "4": ["a"],
  "5": ["s"],
  "6": ["b"],
  "7": ["t"],
  "8": ["b"],
  "9": ["q", "g"],
  "0": ["o"]
};

const punctuationTranslations: LeetSymbolTranslationObject = {
  "@": ["a"],
  "^": ["a"],
  "#": ["h"],
  "!": ["i", "l"],
  "|": ["l"],
  "$": ["s"],
  "+": ["t"]
};

const scriptTranslations: LeetSymbolTranslationObject = {
  "ℬ": ["b"],
  "ℂ": ["c"],
  "ℭ": ["c"],
  "ⅅ": ["d"],
  "ⅆ": ["d"],
  "Ɗ": ["d"],
  "ℯ": ["e"],
  "ⅇ": ["e"],
  "ℰ": ["e"],
  "ℱ": ["f"],
  "ℊ": ["g"],
  "ℋ": ["h"],
  "ℌ": ["h"],
  "ℍ": ["h"],
  "ℎ": ["h"],
  "ℏ": ["h"],
  "ℐ": ["i"],
  "ⅈ": ["i"],
  "ℑ": ["i", "j"],
  "ⅉ": ["j"],
  "ℒ": ["l"],
  "ℓ": ["l"],
  "ℳ": ["m"],
  "ℕ": ["n"],
  "ℵ": ["n"],
  "ℴ": ["o"],
  "ℙ": ["p"],
  "ℛ": ["r"],
  "ℜ": ["r"],
  "ℝ": ["r"],
  "ℤ": ["z"]
};

const smallTranslations: LeetSymbolTranslationObject = {
  "ᴬ": ["a"],
  "ᴀ": ["a"],
  "ᵃ": ["a"],
  "◌ͣ": ["a"],
  "ₐ": ["a"],
  "ͣ": ["a"],
  "ᴮ": ["b"],
  "ᵇ": ["b"],
  "ʙ": ["b"],
  "ᶜ": ["c"],
  "◌ͨ": ["c"],
  "ᴄ": ["c"],
  "ͨ": ["c"],
  "ᴰ": ["d"],
  "ᵈ": ["d"],
  "◌ͩ": ["d"],
  "ᴅ": ["d"],
  "ͩ": ["d"],
  "ᴱ": ["e"],
  "ᵉ": ["e"],
  "◌ͤ": ["e"],
  "ₑ": ["e"],
  "ᴇ": ["e"],
  "ͤ": ["e"],
  "ᶠ": ["f"],
  "ꜰ": ["f"],
  "ᴳ": ["g"],
  "ᵍ": ["g"],
  "ɢ": ["g"],
  "ᴴ": ["h"],
  "ᵸ": ["h"],
  "ʰ": ["h"],
  "н": ["h"],
  "◌ͪ": ["h"],
  "ₕ": ["h"],
  "ʜ": ["h"],
  "ͪ": ["h"],
  "ᶦ": ["i"],
  "ᴵ": ["i"],
  "ⁱ": ["i"],
  "◌ͥ": ["i"],
  "ᵢ": ["i"],
  "ɪ": ["i"],
  "ͥ": ["i"],
  "ᴶ": ["j"],
  "ʲ": ["j"],
  "ⱼ": ["j"],
  "ᴊ": ["j"],
  "ᴷ": ["k"],
  "ᵏ": ["k"],
  "ₖ": ["k"],
  "ᴋ": ["k"],
  "κ": ["k"],
  "ᴸ": ["l"],
  "ᶫ": ["l"],
  "ˡ": ["l"],
  "ₗ": ["l"],
  "ʟ": ["l"],
  "℩": ["l"],
  "ᴹ": ["m"],
  "ᵐ": ["m"],
  "◌ͫ": ["m"],
  "ₘ": ["m"],
  "ᴍ": ["m"],
  "ͫ": ["m"],
  "м": ["m"],
  "ᴺ": ["n"],
  "ᶰ": ["n"],
  "ⁿ": ["n"],
  "ₙ": ["n"],
  "ɴ": ["n"],
  "ᴼ": ["o"],
  "ᵒ": ["o"],
  "◌ͦ": ["o"],
  "ₒ": ["o"],
  "ᴏ": ["o"],
  "ͦ": ["o"],
  "ᴾ": ["p"],
  "ᵖ": ["p"],
  "ₚ": ["p"],
  "ᴘ": ["p"],
  "ᴿ": ["r"],
  "ʳ": ["r"],
  "◌ͬ": ["r"],
  "ᵣ": ["r"],
  "◌᷊": ["r"],
  "ʀ": ["r"],
  "ͬ": ["r"],
  "ˢ": ["s"],
  "ₛ": ["s"],
  "ꜱ": ["s"],
  "ᵀ": ["t"],
  "ᵗ": ["t"],
  "◌ͭ": ["t"],
  "ₜ": ["t"],
  "ᴛ": ["t"],
  "ͭ": ["t"],
  "ᵁ": ["u"],
  "ᶸ": ["u"],
  "ᵘ": ["u"],
  "◌ͧ": ["u"],
  "ᵤ": ["u"],
  "ᴜ": ["u"],
  "ͧ": ["u"],
  "ⱽ": ["v"],
  "ᵛ": ["v"],
  "◌ͮ": ["v"],
  "ᵥ": ["v"],
  "ᴠ": ["v"],
  "ͮ": ["v"],
  "ᵂ": ["w"],
  "ʷ": ["w"],
  "ᴡ": ["w"],
  "ˣ": ["x"],
  "◌ͯ": ["x"],
  "ₓ": ["x"],
  "ͯ": ["x"],
  "ʸ": ["y"],
  "ʏ": ["y"],
  "ᶻ": ["z"],
  "ᴢ": ["z"]
};

const superscriptTranslations: LeetSymbolTranslationObject = {
  "℻": ["fax"],
  "℠": ["sm"],
  "℡": ["tel"],
  "™": ["tm"]
};

const upsideDownInvertedTranslations: LeetSymbolTranslationObject = {
  "ɒ": ["a"],
  "ɔ": ["c"],
  "Ǝ": ["e"],
  "Ə": ["e"],
  "ǝ": ["e"],
  "ə": ["e"],
  "ɚ": ["e"],
  "ɘ": ["e"],
  "Ⅎ": ["f"],
  "ⅎ": ["f"],
  "⅁": ["g"],
  "Ɯ": ["m", "w"],
  "⅄": ["y"]
};

const otherTranslations: LeetSymbolTranslationObject = {
  "ɑ": ["a"],
  "α": ["a"],
  "Ƃ": ["b"],
  "ƃ": ["b"],
  "Ƅ": ["b"],
  "ƅ": ["b"],
  "β": ["b"],
  "ς": ["c"],
  "Ɖ": ["d"],
  "Ƌ": ["d"],
  "ƌ": ["d"],
  "δ": ["d"],
  "℮": ["e"],
  "ℇ": ["e"],
  "℈": ["e"],
  "Ɛ": ["e"],
  "ɛ": ["e"],
  "ε": ["e"],
  "ℨ": ["e", "z"],
  "℉": ["f"],
  "ƒ": ["f"],
  "ℹ": ["i"],
  "Ɩ": ["i"],
  "Ɨ": ["i"],
  "K": ["k"],
  "ĸ": ["k"],
  "κ": ["k"],
  "⅂": ["l"],
  "ƪ": ["l"],
  "Ω": ["n"],
  "ℿ": ["n"],
  "η": ["n"],
  "№": ["no"],
  "ð": ["o", "d"],
  "ο": ["o"],
  "℗": ["p"],
  "þ": ["p", "b"],
  "℘": ["p"],
  "ρ": ["p"],
  "⅊": ["pl", "l"],
  "ℚ": ["q"],
  "φ": ["q"],
  "℞": ["r", "px"],
  "℟": ["r"],
  "я": ["r"],
  "ƨ": ["s", "z"],
  "ℸ": ["t"],
  "τ": ["t"],
  "℧": ["u"],
  "μ": ["u"],
  "℣": ["v"],
  "Ɣ": ["v", "y"],
  "γ": ["v", "y"],
  "ω": ["w"],
  "χ": ["x"],
  "ℽ": ["y"],
  "λ": ["y"],
  "ζ": ["z"]
};


export const leetSymbolTranslations: LeetSymbolTranslationObject =
  Object.assign({},
    advancedCompositeTranslations,
    balloonTranslations,
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

    // scan all complex keys for the character
    for (const potentiallyComplexTranslationKey of leetSymbolTranslationKeys) {

      // if another translationKey contains the character
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
