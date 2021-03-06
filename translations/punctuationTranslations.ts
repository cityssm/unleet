import type { LeetSymbolTranslationObject } from "./types";

export const punctuationTranslations: LeetSymbolTranslationObject = {
  "@": ["a"],
  "^": ["a"],
  "(": ["c"],
  "[": ["c"],
  "<": ["c"],
  "¢": ["c"],
  "©": ["c"],
  "#": ["h"],
  ":": ["i"],
  "!": ["i", "l"],
  "|": ["i", "l"],
  "®": ["r"],
  "$": ["s"],
  "+": ["t"]
};

export const advancedPunctuationTranslations: LeetSymbolTranslationObject = {
  "/\\": ["a"],
  "/-\\": ["a"],
  "|-\\": ["a"],
  "[3": ["b"],
  "|3": ["b"],
  "[)": ["d"],
  "|>": ["d"],
  "|)": ["d"],
  "|]": ["d"],
  "[-": ["e"],
  "|=": ["f"],
  "/=": ["f"],
  "(_+": ["g"],
  "|-|": ["h"],
  "/-/": ["h"],
  "[-]": ["h"],
  "]-[": ["h"],
  ")-(": ["h"],
  "(-)": ["h"],
  ":-:": ["h"],
  "|~|": ["h"],
  "]~[": ["h"],
  "}{": ["h", "x"],
  "][": ["i"],
  "\\": ["i", "l"],
  "/": ["i", "l"],
  "_|": ["j"],
  "_/": ["j"],
  "|<": ["k"],
  "|{": ["k"],
  "|_": ["l"],
  "[_": ["l"],
  "1_": ["l"],
  "/\\/\\": ["m"],
  "/v\\": ["m"],
  "|\\/|": ["m"],
  "|v|": ["m"],
  "/\\/": ["n"],
  "|\\|": ["n"],
  "/v": ["n"],
  "[\\]": ["n"],
  "|v": ["n"],
  "[]": ["o"],
  "()": ["o"],
  "|*": ["p"],
  "|o": ["p"],
  "|º": ["p"],
  "|°": ["p"],
  "/*": ["p"],
  "|d": ["p"],
  "(_,)": ["q"],
  "()_": ["q"],
  "0_": ["q"],
  "/2": ["r"],
  "|?": ["r"],
  "|2": ["r"],
  "_/¯": ["s"],
  "'|'": ["t"],
  "¯|¯": ["t"],
  "(_)": ["u"],
  "|_|": ["u"],
  "l|": ["u"],
  "\\/": ["v"],
  "|/": ["v"],
  "\\/\\/": ["w"],
  "\\|/": ["w"],
  "\\_|_/": ["w"],
  "\\_:_/": ["w"],
  "'//": ["w"],
  "\\^/": ["w"],
  "\\v/": ["w"],
  "><": ["x"],
  ")(": ["x"],
  "7_": ["z"],
  ">_": ["z"]
};
