"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("assert");
const index_1 = require("../index");
const cleanAlphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetTestWords = [
    "@8ςƉ3ƒg#!j|<1ℳNȹ9r$7u\\/w><yζ",
    "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ",
    "ᵃᵇᶜᵈᵉᶠᵍʰᶦʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ",
    "ₐᵦ𝒸𝒹ₑ𝒻𝓰ₕᵢⱼₖₗₘₙₒₚᵩᵣₛₜᵤᵥ𝓌ₓᵧ𝓏",
    "ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻ",
    "ₐɃČḒₑḟḡₕᵢⱼₖₗₘₙₒₚꝘᵣₛₜᵤᵥᾣₓƳɀ"
];
for (const testWord of alphabetTestWords) {
    describe("unleet(\"" + testWord + "\")", function () {
        it("Has one result = \"" + cleanAlphabet + "\"", () => {
            assert.ok(index_1.unleet(testWord).includes(cleanAlphabet));
        });
    });
}
