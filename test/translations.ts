import * as assert from "assert";

import * as fs from "fs";

describe("translations", () => {

  let simpleTranslations: {[symbol: string]: string[]};
  let complexTranslations: {[symbol: string]: string[]};

  before(() => {
    const translationMappings = JSON.parse(fs.readFileSync('./translations.json').toString());
    simpleTranslations = translationMappings.simpleTranslations;
    complexTranslations = translationMappings.complexTranslations;
  })

  it("has simpleTranslations", () => {
    assert.strictEqual(Object.keys(simpleTranslations).length > 0, true);
  });

  it("has complexTranslations", () => {
    assert.strictEqual(Object.keys(complexTranslations).length > 0, true);
  });
});
