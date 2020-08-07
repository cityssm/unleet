"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leetSymbolTranslationKeys = exports.complexTranslations = exports.simpleTranslations = exports.leetSymbolTranslations = void 0;
;
const advancedCompositeTranslations = {
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
const compoundedTranslations = {
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
const fractionTranslations = {
    "½": ["12"],
    "¼": ["14"],
    "¾": ["34"],
    "℀": ["ac"],
    "℁": ["as"],
    "⅍": ["as"],
    "℅": ["co"],
    "℆": ["cu"]
};
const letterSwapTranslations = {
    "s": ["z"],
    "z": ["s"]
};
const numberTranslations = {
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
const punctuationTranslations = {
    "@": ["a"],
    "^": ["a"],
    "#": ["h"],
    "!": ["i", "l"],
    "|": ["l"],
    "$": ["s"],
    "+": ["t"]
};
const scriptTranslations = {
    "ℬ": ["b"],
    "ℂ": ["c"],
    "ℭ": ["c"],
    "𝒸": ["c"],
    "ⅅ": ["d"],
    "ⅆ": ["d"],
    "Ɗ": ["d"],
    "𝒹": ["d"],
    "ℯ": ["e"],
    "ⅇ": ["e"],
    "ℰ": ["e"],
    "ℱ": ["f"],
    "𝒻": ["f"],
    "ℊ": ["g"],
    "𝓰": ["g"],
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
    "𝓌": ["w"],
    "ℤ": ["z"],
    "𝓏": ["z"]
};
const smallTranslations = {
    "ᴬ": ["a"],
    "ᴀ": ["a"],
    "ᵃ": ["a"],
    "◌ͣ": ["a"],
    "ₐ": ["a"],
    "ͣ": ["a"],
    "ᴮ": ["b"],
    "ᵇ": ["b"],
    "ʙ": ["b"],
    "ᵦ": ["b"],
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
    "ғ": ["f"],
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
    "ᵠ": ["q"],
    "ᵩ": ["q"],
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
    "ᵧ": ["y"],
    "ᶻ": ["z"],
    "ᴢ": ["z"]
};
const superscriptTranslations = {
    "℻": ["fax"],
    "℠": ["sm"],
    "℡": ["tel"],
    "™": ["tm"]
};
const upsideDownInvertedTranslations = {
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
const otherTranslations = {
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
    "ᾣ": ["w"],
    "χ": ["x"],
    "ℽ": ["y"],
    "λ": ["y"],
    "ζ": ["z"]
};
exports.leetSymbolTranslations = Object.assign({}, advancedCompositeTranslations, compoundedTranslations, fractionTranslations, letterSwapTranslations, numberTranslations, punctuationTranslations, scriptTranslations, smallTranslations, superscriptTranslations, upsideDownInvertedTranslations, otherTranslations);
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
