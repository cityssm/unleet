import type { LeetSymbolTranslationObject } from "./types";

export const punctuationTranslations: LeetSymbolTranslationObject = {
  "@": ["a"],
  "^": ["a"],
  "#": ["h"],
  "!": ["i", "l"],
  "|": ["l"],
  "$": ["s"],
  "+": ["t"]
};

export const advancedPunctuationTranslations: LeetSymbolTranslationObject = {
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
