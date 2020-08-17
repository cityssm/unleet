import * as assert from "assert";
import { unleet } from "../index";


const cleanAlphabet = "abcdefghijklmnopqrstuvwxyz";


const alphabetTestWords = [
  "@8ςƉ3ƒg#!j|<1ℳNȹ9r$7u\\/w><yζ",
  "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ",
  "ᵃᵇᶜᵈᵉᶠᵍʰᶦʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ",
  "ₐᵦ𝒸𝒹ₑ𝒻𝓰ₕᵢⱼₖₗₘₙₒₚᵩᵣₛₜᵤᵥ𝓌ₓᵧ𝓏",
  "ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻ",
  "ₐɃČḒₑḟḡₕᵢⱼₖₗₘₙₒₚꝘᵣₛₜᵤᵥᾣₓƳɀ"];


for (const testWord of alphabetTestWords) {

  describe("unleet(\"" + testWord + "\")", function() {
    it("Has one result = \"" + cleanAlphabet + "\"", () => {
      assert.ok(
        unleet(testWord).includes(cleanAlphabet)
      );
    });

  });

}
