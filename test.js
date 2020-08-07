"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const testWords = ["1337 $P33K",
    "$ecr37 b@d w0rdz",
    "0rg@ni℠",
    "+È$7!ₙ9",
    "ⓑⓐⓛⓛⓞⓞⓝⓢ",
    "ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ",
    "ᵃᵇᶜᵈᵉᶠᵍʰᶦʲᵏˡᵐⁿᵒᵖᵠʳˢᵗᵘᵛʷˣʸᶻ",
    "ₐᵦ𝒸𝒹ₑ𝒻𝓰ₕᵢⱼₖₗₘₙₒₚᵩᵣₛₜᵤᵥ𝓌ₓᵧ𝓏",
    "ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾᵠᴿˢᵀᵁⱽᵂˣʸᶻ",
    "ₐɃČḒₑḟḡₕᵢⱼₖₗₘₙₒₚꝘᵣₛₜᵤᵥᾣₓƳɀ"
];
for (const testWord of testWords) {
    console.log("Testing " + testWord);
    console.log(index_1.unleet(testWord).join(", "));
    console.log();
}
