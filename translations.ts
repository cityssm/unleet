import * as fs from "fs";

type Translations = { [symbol: string]: string[] };

const translations = JSON.parse(fs.readFileSync("translations.json").toString());

export const simpleTranslations: Translations = translations.simpleTranslations;
export const complexTranslations: Translations = translations.complexTranslations;

export const translationSymbols = [...Object.keys(simpleTranslations), ...Object.keys(complexTranslations)];
