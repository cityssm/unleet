import * as fs from "fs";
import { fileURLToPath } from "url";
const translationsPath = fileURLToPath(new URL("translations.json", import.meta.url));
const translations = JSON.parse(fs.readFileSync(translationsPath).toString());
export const simpleTranslations = translations.simpleTranslations;
export const complexTranslations = translations.complexTranslations;
export const translationSymbols = [...Object.keys(simpleTranslations), ...Object.keys(complexTranslations)];
