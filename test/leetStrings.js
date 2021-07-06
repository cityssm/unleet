import * as assert from "assert";
import { unleet } from "../index.js";
const cleanAlphabetStart = "abcdefghijklm";
const cleanAlphabetEnd = "nopqrstuvwxyz";
const leetStrings = [
    ["$@|_||_7 5'|'3 /\\/\\ar!e", "sault ste marie"],
    ["ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍ", cleanAlphabetStart],
    ["ᵃᵇᶜᵈᵉᶠᵍʰᶦʲᵏˡᵐ", cleanAlphabetStart],
    ["ₐᵦ𝒸𝒹ₑ𝒻𝓰ₕᵢⱼₖₗₘ", cleanAlphabetStart],
    ["ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹ", cleanAlphabetStart],
    ["@8ςƉ3ƒ(_+#!j|<1ℳ", cleanAlphabetStart],
    ["ₐɃČḒₑḟḡₕᵢⱼₖₗₘ", cleanAlphabetStart],
    ["ɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ", cleanAlphabetEnd],
    ["ⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ", cleanAlphabetEnd],
    ["ₙₒₚᵩᵣₛₜᵤᵥ𝓌ₓᵧ𝓏", cleanAlphabetEnd],
    ["ᴺᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻ", cleanAlphabetEnd],
    ["Nȹ9r$7u\\/w><yζ", cleanAlphabetEnd],
    ["ₙₒₚꝘᵣₛₜᵤᵥᾣₓƳɀ", cleanAlphabetEnd],
    ["söme b@d w0rds wíth áccènｔƶ", "some bad words with accents"]
];
describe("unleet()", () => {
    for (const testString of leetStrings) {
        it("Translates \"" + testString[0] + "\" to \"" + testString[1] + "\"", () => {
            const results = unleet(testString[0]);
            assert.ok(results.includes(testString[1]));
        });
    }
});
