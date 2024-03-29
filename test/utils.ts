import * as assert from "assert";

import { combineStringArrays } from "../utils.js";

describe("utils", () => {


  it("Combines array", () => {
    const arrayToCombine = [
      ['sault'],
      ['ste', "sainte"],
      ['marie']
    ];
    const combinedArray = combineStringArrays(arrayToCombine);
    assert.strictEqual(combinedArray.length, 2);
  });
});
