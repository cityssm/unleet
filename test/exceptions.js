"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const index_1 = require("../index");
describe("unleet(exceptions) ", () => {
    it("Returns empty string on null", () => {
        assert.strictEqual(index_1.unleet(null).includes(""), true);
    });
    it("Returns empty string on undefined", () => {
        assert.strictEqual(index_1.unleet(undefined).includes(""), true);
    });
    it("Returns \"leet\" on number 1337", () => {
        assert.strictEqual(index_1.unleet(1337).includes("leet"), true);
    });
});
