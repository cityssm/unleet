import { unleet } from "./index";

const testWords = ["1337 $P33K",
  "$ecr37 b@d w0rdz",
  "0rg@ni℠",
  "+È$7!ₙ9",
  "ⓑⓐⓛⓛⓞⓞⓝⓢ",
  "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ",
  "ᵃᵇᶜᵈᵉᶠᵍʰᶦʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ",
  "ₐᵦ𝒸𝒹ₑ𝒻𝓰ₕᵢⱼₖₗₘₙₒₚᵩᵣₛₜᵤᵥ𝓌ₓᵧ𝓏",
  "ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻ",
  "ₐɃČḒₑḟḡₕᵢⱼₖₗₘₙₒₚꝘᵣₛₜᵤᵥᾣₓƳɀ",
  "ǅ ǌ ȹ ǽ ǉ ℔"
];

for (const testWord of testWords) {

  console.log("Testing " + testWord);
  console.log(unleet(testWord).join(", "));
  console.log();
}
