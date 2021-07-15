import * as assert from "assert";
import { unleet } from "../index.js";

const cleanString = "the quick brown fox jumps over the lazy dog";

const leetStrings = [
  "𝕥𝕙𝕖 𝕢𝕦𝕚𝕔𝕜 𝕓𝕣𝕠𝕨𝕟 𝕗𝕠𝕩 𝕛𝕦𝕞𝕡𝕤 𝕠𝕧𝕖𝕣 𝕥𝕙𝕖 𝕝𝕒𝕫𝕪 𝕕𝕠𝕘",
  "ₜₕₑ qᵤᵢ𝄴ₖ ᵦᵣₒwₙ 𝆑ₒₓ ⱼᵤₘₚₛ ₒᵥₑᵣ ₜₕₑ ₗₐ𝆎y dₒg",
  "𝓽𝓱𝓮 𝓺𝓾𝓲𝓬𝓴 𝓫𝓻𝓸𝔀𝓷 𝓯𝓸𝔁 𝓳𝓾𝓶𝓹𝓼 𝓸𝓿𝓮𝓻 𝓽𝓱𝓮 𝓵𝓪𝔃𝔂 𝓭𝓸𝓰",
  "セ卄🝗 Ɋㄩ讠⼕长 ⻏尺ㄖ山𝓝 ﾁㄖ〤 丿ㄩ爪尸丂 ㄖᐯ🝗尺 七卄🝗 ㇄闩Ⲍ丫 ᗪㄖᎶ"];

describe("unleet()", () => {

  for (const testString of leetStrings) {

    it("Translates \"" + testString + "\"", () => {
      const results = unleet(testString);

      const stringFound = results.includes(cleanString);

      if (!stringFound) {
        console.log(results);
        assert.fail();
      } else {
        assert.ok(true);
      }
    });
  }
});
