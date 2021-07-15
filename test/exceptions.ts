import * as assert from "assert";
import { unleet } from "../index.js";


describe("unleet(exceptions)", () => {

  it("Returns empty string on null", () => {
    // eslint-disable-next-line unicorn/no-null
    assert.strictEqual(unleet(null).includes(""), true);
  });

  it("Returns empty string on undefined", () => {
    // eslint-disable-next-line unicorn/no-useless-undefined
    assert.strictEqual(unleet(undefined).includes(""), true);
  });

  it("Returns \"leet\" on number 1337", () => {
    assert.strictEqual(unleet(1337).includes("leet"), true);
  });
});
