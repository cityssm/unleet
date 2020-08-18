import * as assert from "assert";
import { unleet } from "../index";


const cleanAlphabetStart = "abcdefghijklm";
const cleanAlphabetEnd = "nopqrstuvwxyz";


const alphabetTestWordsStart = [
  "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍ",
  "ᵃᵇᶜᵈᵉᶠᵍʰᶦʲᵏˡᵐ",
  "ₐᵦ𝒸𝒹ₑ𝒻𝓰ₕᵢⱼₖₗₘ",
  "ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹ",
  "@8ςƉ3ƒ(_+#!j|<1ℳ",
  "ₐɃČḒₑḟḡₕᵢⱼₖₗₘ"];

const alphabetTestWordsEnd = [
  "ɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ",
  "ⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ",
  "ₙₒₚᵩᵣₛₜᵤᵥ𝓌ₓᵧ𝓏",
  "ᴺᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻ",
  "Nȹ9r$7u\\/w><yζ",
  "ₙₒₚꝘᵣₛₜᵤᵥᾣₓƳɀ"
];


for (const testWord of alphabetTestWordsStart) {

  describe("unleet(\"" + testWord + "\")", () => {
    it("Has one result = \"" + cleanAlphabetStart + "\"", () => {
      assert.ok(
        unleet(testWord).includes(cleanAlphabetStart)
      );
    });
  });
}

for (const testWord of alphabetTestWordsEnd) {

  describe("unleet(\"" + testWord + "\")", () => {
    it("Has one result = \"" + cleanAlphabetEnd + "\"", () => {
      assert.ok(
        unleet(testWord).includes(cleanAlphabetEnd)
      );
    });
  });
}
