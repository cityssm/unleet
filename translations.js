import * as fs from "fs";
const translations = JSON.parse(fs.readFileSync("translations.json").toString());
export const simpleTranslations = translations.simpleTranslations;
export const complexTranslations = translations.complexTranslations;
export const translationSymbols = [...Object.keys(simpleTranslations), ...Object.keys(complexTranslations)];
