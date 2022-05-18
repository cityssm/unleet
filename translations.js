import * as fs from "node:fs";
import { fileURLToPath } from "node:url";
const translationsPath = fileURLToPath(new URL("translations.json", import.meta.url));
const translations = JSON.parse(fs.readFileSync(translationsPath).toString());
export const simpleTranslations = translations.simpleTranslations;
export const complexTranslations = translations.complexTranslations;
export const translationSymbols = [...Object.keys(simpleTranslations), ...Object.keys(complexTranslations)];
