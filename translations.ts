import * as fs from "node:fs";
import { fileURLToPath } from "node:url";

type Translations = { [symbol: string]: string[] };

const translationsPath = fileURLToPath(new URL("translations.json", import.meta.url));

const translations = JSON.parse(fs.readFileSync(translationsPath).toString());

export const simpleTranslations: Translations = translations.simpleTranslations;
export const complexTranslations: Translations = translations.complexTranslations;

export const translationSymbols = [...Object.keys(simpleTranslations), ...Object.keys(complexTranslations)];
