interface MappingsObject {
  [character: string]: string[];
}

/*
 * Although sometimes difficult, mappings should be ordered as:
 * [
 *   numbers and simple keyboard symbols | "4", "@"
 *   pretty much normal looking          | "ɑ"
 *   accented or decorated characters    | "A̲"
 *   script characters                   | "𝒜", "𝓐"
 *   math, greek, arabic, and others     | "Ꭿ", "ᗩ", "闩"
 *   upside-down characters              | "∀"
 *   superscript, subscript, small       | "ᴬ"
 *   characters inside shapes            | "🄰", "🅰"
 *   punctuation combinations            | "/-\\"
 * ]
]
 */

export const mappings: MappingsObject = {
  "A": ["4",
    "𝖠", "𝘈", "𝘼", "𝑨", "𝐀", "𝗔", "𝙰",
    "A̲",
    "𝒜", "𝓐", "𝐴", "𝔄", "𝕬",
    "Ꭿ", "ᗩ", "闩", "Ʌ",
    "∀",
    "ᴬ", "ᴀ", "🇦​​​​​",
    "𝔸", "🄰", "🅰", "🅐", "Ⓐ", "🄐",
    "/\\", "/-\\", "|-\\",
    "▞▚"],

  "a": ["ɑ", "@", "^",
    "𝙖", "𝒂", "𝐚", "𝗮", "𝚊", "α", "𝘢", "𝖺", "ａ",
    "a̲", "a̳", "a̶", "a̫͖̻",
    "𝕒", "𝔞", "𝖆", "𝒶", "𝓪",
    "ⲁ",
    "𝑎",
    "α", "∂",
    "ɒ", "ɐ",
    "ᵃ", "◌ͣ", "ₐ", "ͣ",
    "ⓐ", "⒜"],

  "aa": ["aͣ", "Aͣ"],
  "ac": ["℀"],
  "as": ["℁", "⅍"],

  "B": ["13", "8",
    "𝖡", "𝗕", "𝘉", "𝘽", "𝑩", "𝐁", "𝗕", "𝙱", "Ⲃ", "Ｂ",
    "ℬ", "𝔹", "𝐵", "ꓭ", "B̲", "𝔅", "𝕭", "𝓑",
    "Ƃ", "ƃ", "Ƅ", "ƅ", "β", "ß", "ß",
    "乃", "ẞ", "ᗷ", "⻏",
    "ᴮ", "ʙ", "ᵦ",
    "🄱", "🅱", "🅑", "Ⓑ", "🇧​​​​​", "🄑",
    "[3", "|3"
  ],

  "b": ["6",
    "𝘣", "𝙗", "𝒃", "𝐛", "𝗯", "𝚋", "𝖻",
    "𝕓", "𝑏", "b̲", "ｂ", "ᑲ", "𝓫", "𝔟", "𝖇", "𝒷",
    "þ",
    "ᵇ",
    "ⓑ", "⒝",
    "▙"],

  "bb": ["Вⷡ"],

  "C": [
    "𝖢", "𝘊", "𝘾", "𝑪", "𝐂", "𝗖", "𝙲", "𝙲",
    "ℂ", "ℭ", "𝕮", "𝒞", "𝓒",
    "🄲", "🅲", "🅒", "🄒"
  ],

  "c": ["(", "[", "<", "¢",
    "🇨​​​​​", "𝙘", "ⲥ", "𝚌", "𝐜", "𝘤", "𝗰", "𝒄", "𝖼", "ｃ",
    "c̲",
    "𝕔", "𝒸", "𝓬", "𝔠", "𝖈",
    "𝐶", "⼕", "ᙅ", "⊂",
    "ς",
    "ɔ",
    "ᶜ", "◌ͨ", "ᴄ", "ͨ", "𝄴",
    "©", "Ⓒ", "⒞",
    "❰"],

  "cc": ["Cͨ"],
  "co": ["℅"],
  "cu": ["℆"],

  "D": ["𝘋", "𝘿", "𝑫", "𝐃", "𝗗", "ᗪ", "🇩", "𝐷", "𝖣", "𝙳",
    "𝔻", "ⅅ", "Ɗ", "Ɖ", "𝙳", "𝔇", "𝕯", "𝒟", "𝓓",
    "D̲", "ↁ",
    "ᴅ", "ᴰ",
    "ᗡ",
    "🄳", "🅳", "🅓", "Ⓓ", "🄓", "⒟",
    "[)", "|>", "|)", "|]",
    "◗"
  ],

  "d": ["ⅆ", "𝒹", "𝙙", "𝚍", "𝗱", "𝐝", "𝒅", "𝘥", "𝖽", "ｄ",
    "𝕕", "𝓭", "𝔡", "𝖉",
    "Ƌ", "ƌ", "δ", "ð", "ᖱ", "ԃ", "ⲇ",
    "ᵈ", "◌ͩ", "ͩ"
  ],

  "db": ["ȸ"],
  "dd": ["Dͩ"],
  "do": ["ȸ"],

  "E": ["3",
    "🇪", "𝐸", "𝖤", "𝘌", "𝙀", "𝑬", "𝐄", "𝗘", "𝙴",
    "𝔼", "ℰ", "ℇ", "𝔈", "𝕰", "𝓔",
    "Ɛ", "ɛ", "ε", "€", "є", "€",
    "ℨ", "℈",
    "🝗", "∈", "ⲉ",
    "ᴱ", "ᴇ",
    "🅴", "🄴", "🅔", "🄔",
    "[-", "█☰"],

  "e": ["𝙚", "𝚎", "𝗲", "𝐞", "𝘦", "𝒆", "𝖾",
    "e̲",
    "𝕖", "℮", "ℯ", "ⅇ", "𝓮", "ｅ",
    "ҽ", "𝔢", "𝖊",
    "Ə", "ǝ", "ə", "ɚ", "ɘ",
    "ᵉ", "◌ͤ", "ₑ", "ͤ",
    "ⓔ", "⒠"],

  "F": ["🇫", "𝐹", "𝖥", "𝘍", "𝙁", "𝑭", "𝐅", "𝗙", "𝙵",
    "𝔽", "ℱ", "𝔉", "𝕱", "𝓕",
    "℉",
    "Ⅎ", "ⅎ", "ꟻ",
    "ꜰ", "ғ",
    "🅵", "🄵", "🅕", "🄕",
    "█〓"],

  "f": ["𝙛", "𝚏", "𝐟", "𝒇", "𝖿", "𝗳",
    "f̲",
    "𝕗", "ƒ", "𝒻", "𝓯",
    "ﾁ", "⨍", "𝔣", "𝖋", "𝘧", "ｆ",
    "ᶠ", "𝆑",
    "ⓕ", "⒡",
    "|=", "/="],

  "fax": ["℻"],

  "G": ["6",
    "𝖦", "𝘎", "𝙂", "𝐆", "𝗚", "𝙶",
    "𝔾", "𝐺", "𝑮", "𝔊", "𝕲", "𝒢", "𝓖",
    "⅁",
    "ꮆ",
    "ᴳ", "ɢ",
    "🄶", "🅖", "Ⓖ", "🅶", "🇬​​​​​", "🄖",
    "(_+"
  ],

  "g": ["9",
    "𝗀", "𝘨", "𝙜", "𝒈", "𝐠", "𝗴", "ց", "𝚐", "ｇ",
    "𝕘", "ℊ", "𝓰", "𝑔", "𝔤", "𝖌", "ℊ", "ꞡ",
    "ᵍ",
    "ⓖ", "⒢"],

  "H": ["#",
    "𝐻", "𝖧", "𝘏", "𝙃", "𝑯", "𝐇", "𝗛", "𝙷",
    "ℋ", "ℌ", "ℍ", "𝕳", "𝓗",
    "卄", "ԋ", "ⲏ",
    "ᴴ", "ᵸ", "н", "ʜ",
    "🄷", "🅷", "🅗", "🇭​​​​​", "🄗",
    "|-|", "/-/", "[-]", "]-[", ")-(", "(-)", ":-:", "|~|", "]~[", "}{",
    "█▬█"],

  "h": ["𝗁", "𝘩", "𝙝", "𝒉", "𝐡", "𝗵", "𝚑",
    "ℎ", "ℏ", "ｈ",
    "h̲",
    "𝕙", "𝔥", "𝖍", "𝒽", "𝓱", "ƕ",
    "ꮒ",
    "ɥ",
    "ⓗ", "⒣",
    "ʰ", "◌ͪ", "ₕ", "ͪ"],

  "hh": ["hͪ"],

  "I": ["1", "|",
    "𝗜", "Ɩ", "𝐼", "𝖨", "𝘐", "𝙄", "𝑰", "𝐈", "𝙸",
    "𝕀", "ℐ", "ℑ", "𝕴", "𝓘",
    "Ɨ", "ᵻ",
    "ᶦ", "ᴵ", "ɪ",
    "🄸", "🅸", "🅘", "🇮​​​​​", "🄘",
    "][", "\\", "/",
    "█"
  ],

  "i": [":", "!",
    "ⅈ", "ℹ", "𝙞", "𝚒", "𝐢", "𝗂", "𝘪", "𝒊", "i", "𝗶", "ｉ",
    "i̲",
    "𝓲", "𝕚", "𝒾", "𝔦", "𝖎",
    "讠", "⫯", "ⲓ", "ι",
    "ⁱ", "◌ͥ", "ᵢ", "ͥ",
    "ⓘ", "⒤"],

  "ij": ["ǉ"],

  "J": ["🇯", "𝐽", "𝖩", "𝘑", "𝙅", "𝑱", "𝐉", "𝗝", "𝙹",
    "𝕁", "ℑ", "𝔍", "𝕵", "𝒥", "𝓙",
    "ᴶ", "ᴊ",
    "丿",
    "🄹", "🅹", "🅙", "🄙",
    "_|", "_/",
    "▟"],

  "j": ["¿", ";",
    "𝑗", "𝘫", "𝙟", "𝒋", "𝐣", "𝗷", "𝗃", "ｊ",
    "𝕛", "ⅉ", "𝔧", "𝖏", "𝒿", "𝓳",
    "𝚓", "ʝ",
    "ʲ", "ⱼ",
    "ⓙ", "⒥"],

  "K": ["K", "ĸ", "κ", "𝐾", "𝖪", "𝘒", "𝙆", "𝑲", "𝐊", "𝗞", "𝙺",
    "𝕂", "𝔎", "𝕶", "𝒦", "𝓚",
    "ᴷ", "ᴋ", "κ", "🇰",
    "🄺", "🅺", "🅚", "🄚",
    "|<", "|{"],

  "k": ["x",
    "𝘬", "𝙠", "𝒌", "𝐤", "𝗸", "𝚔", "𝗄", "ｋ",
    "k̲", "ꝅ",
    "𝕜", "𝓀", "𝓴", "𝔨", "𝖐",
    "ᴋ", "ɮ", "ⲕ", "长",
    "ʞ",
    "ᵏ", "ₖ",
    "ⓚ", "⒦"],

  "kk": ["ᴋⷦ"],

  "L": ["🇱", "𝐿", "𝖫", "𝘓", "𝙇", "𝑳", "𝐋", "𝗟", "𝙻",
    "𝕃", "ℒ", "𝔏", "𝕷", "𝓛",
    "£", "⅊", "㇄",
    "⅂",
    "ᴸ", "ᶫ", "ʟ",
    "🄻", "🅻", "🅛", "🄛",
    "|_", "[_", "1_",
    "▙▄"],

  "l": ["1", "!", "|", "t",
    "𝘭", "𝙡", "𝒍", "𝐥", "𝗹", "𝚕", "𝗅",
    "l̲",
    "𝕝", "𝔩", "𝖑", "𝓁", "ℓ", "𝓵", "ｌ",
    "ƪ", "ɬ",
    "ˡ", "ₗ", "℩",
    "ⓛ", "⒧",
    "\\", "/"],

  "lj": ["Ǉ", "ǈ", "ǉ"],
  "lb": ["℔"],

  "M": ["ᴍ", "🇲", "𝑀", "𝖬", "𝘔", "𝙈", "𝑴", "𝐌", "𝗠", "𝙼",
    "𝕄", "ℳ", "𝔐", "𝕸", "𝓜",
    "ⲙ", "爪",
    "ᴹ", "ᴍ", "м",
    "🄼", "🅼", "🅜", "Ⓜ", "🄜",
    "/\\/\\", "/v\\", "|\\/|", "|v|",
    "▛▚▞▜"],

  "m": ["𝑚", "𝗆", "𝘮", "𝙢", "𝒎", "𝐦", "𝗺", "𝚖",
    "m̲",
    "𝕞", "𝔪", "𝖒", "𝓂", "𝓶", "ɱ", "ｍ",
    "Ɯ", "ɯ", "w",
    "ᵐ", "◌ͫ", "ₘ", "ͫ",
    "ⓜ", "⒨"],

  "mm": ["mͫ"],

  "N": ["🇳", "𝑁", "𝖭", "𝘕", "𝙉", "𝑵", "𝐍", "𝗡", "𝙽",
    "ℕ", "ℵ", "𝓝", "𝔑", "𝕹", "𝒩",
    "ﬡ", "₪",
    "ᴺ", "ᶰ", "ɴ", "ⲛ",
    "🄽", "🅽", "🅝", "🄝",
    "/\\/", "|\\|", "/v", "[\\]", "|v",
    "▛▟"],

  "n": ["𝑛", "𝘯", "𝙣", "𝒏", "𝐧", "𝗻", "𝚗", "𝗇",
    "n̲",
    "𝕟", "𝔫", "𝖓", "𝓃", "𝓷", "ｎ",
    "Ω", "ℿ", "η", "ɳ",
    "ⁿ", "ₙ",
    "ⓝ", "⒩"],

  "no": ["№"],

  "O": ["0",
    "𝑂", "𝘖", "𝙊", "𝑶", "𝐎", "𝗢", "𝙾",
    "𝕆", "𝔒", "𝕺", "𝒪", "𝓞",
    "🄾", "🅾", "🅞", "🄞",
    "[]", "()",
    "██"],

  "o": [
    "🇴", "𝗈", "ο", "𝘰", "𝙤", "𝒐", "𝐨", "𝗼", "𝚘",
    "o̲",
    "𝕠", "𝔬", "𝖔", "ℴ", "𝓸",
    "ð", "ⲟ", "ｏ", "σ", "ㄖ", "𝖮", "ᗝ", "ɵ",
    "°", "º", "ℴ", "ᴼ", "ᵒ", "◌ͦ", "ₒ", "ᴏ", "ͦ", "º",
    "ⓞ", "⒪",
  ],

  "ob": ["ȸ"],
  "oe": ["œ"],
  "of": ["℉"],
  "oo": ["oͦ"],
  "op": ["ȹ"],

  "P": ["🇵", "𝑃", "𝖯", "𝘗", "𝙋", "𝑷", "𝐏", "𝗣", "𝙿",
    "ℙ", "𝔓", "𝕻", "𝒫", "𝓟",
    "尸", "ρ", "ᖰ", "ᕈ",
    "ᴾ", "ᴘ",
    "🄿", "🅿", "🅟", "℗", "🄟",
    "|*", "|o", "|º", "|°", "/*", "|D",
    "▛"],

  "p": ["𝗉", "𝑝", "𝘱", "𝙥", "𝒑", "𝐩", "𝗽", "𝚙", "ⲣ",
    "p̲",
    "𝕡", "𝔭", "𝖕", "𝓅", "𝓹", "ｐ",
    "þ", "℘", "ρ", "ƿ",
    "ᵖ", "ₚ",
    "ⓟ", "⒫"],

  "pl": ["⅊"],
  "pp": ["рⷬ"],
  "px": ["℞"],

  "Q": ["🇶", "𝑄", "𝖰", "𝘘", "𝙌", "𝑸", "𝐐", "𝗤", "𝚀",
    "ℚ", "𝔔", "𝕼", "𝒬", "𝓠",
    "ǫ",
    "🅀", "🆀", "🅠", "🄠",
    "(_,)", "()_", "0_",
    "█▙"],

  "q": ["o", "9",
    "q̲",
    "𝑞", "𝗊", "𝘲", "𝙦", "𝒒", "𝐪", "𝗾", "𝚚", "ｑ",
    "𝕢", "𝔮", "𝖖", "𝓆", "𝓺", "ƣ",
    "φ", "ᑫ", "Ɋ", "ᕴ", "ᖳ", "գ", "q̨",
    "ᵠ", "ᵩ",
    "ⓠ", "⒬"],

  "qo": ["ȹ"],
  "qp": ["ȹ"],

  "R": ["2",
    "🇷", "𝑅", "𝖱", "𝘙", "𝙍", "𝑹", "𝐑", "𝗥", "𝚁",
    "℞", "℟",
    "ℛ", "ℜ", "ℝ", "𝕽", "𝓡",
    "Я", "я", "Я",
    "ᴿ", "ʀ", "尺", "ᖇ",
    "®", "🅁", "🆁", "🅡", "🄡",
    "/2", "|?", "|2"],

  "r": ["𝑟", "𝘳", "𝙧", "𝒓", "𝐫", "𝗿", "𝚛", "𝗋",
    "r̲",
    "𝕣", "𝔯", "𝖗", "𝓇", "𝓻", "ｒ",
    "ꞅ", "ɾ",
    "ɹ",
    "ʳ", "◌ͬ", "ᵣ", "◌᷊", "ͬ",
    "ⓡ", "⒭"],

  "rr": ["rͬ"],

  "S": ["5", "$",
    "𝑆", "𝖲", "𝘚", "𝙎", "𝑺", "𝐒", "𝗦", "𝚂",
    "𝕊", "𝔖", "𝕾", "𝒮", "𝓢"],

  "s": ["z",
    "🇸", "𝗌", "𝘴", "𝙨", "𝒔", "𝐬", "𝘀", "𝚜", "ｓ",
    "s̲",
    "𝕤", "𝔰", "𝖘", "𝓈", "𝓼",
    "§", "丂", "ട", "⟆", "𝛓", "r", "b",
    "ƨ", "ϩ",
    "ˢ", "ₛ", "ꜱ", "ᔆ",
    "🅂", "🆂", "🅢", "ⓢ", "🄢", "🄪", "⒮",
    "_/¯",
    "▟▛"],

  "sm": ["℠"],
  "ss": ["s͛"],

  "T": ["7",
    "🇹", "ⲧ", "𝑇", "𝖳", "𝘛", "𝙏", "𝑻", "𝐓", "𝗧", "𝚃",
    "𝕋", "𝔗", "𝕿", "𝒯", "𝓣",
    "ℸ", "τ", "ㄒ",
    "ᵀ", "ᴛ",
    "🅃", "🆃", "🅣", "🄣",
    "'|'", "¯|¯",
    "▜▛"],

  "t": ["+",
    "𝗍", "𝘵", "𝙩", "𝒕", "𝐭", "𝘁", "𝚝", "ｔ",
    "t̲",
    "𝕥", "𝔱", "𝖙", "𝓉", "𝓽",
    "†", "〸", "𝜏", "七", "セ", "ꝉ",
    "ʇ",
    "ⓣ", "⒯",
    "ᵗ", "◌ͭ", "ₜ", "ͭ"],

  "tel": ["℡"],
  "tm": ["™"],
  "tt": ["ᴛⷮ"],

  "U": ["𝑈", "𝖴", "𝘜", "𝙐", "𝑼", "𝐔", "𝗨", "𝚄",
    "𝕌", "𝔘", "𝖀", "𝒰", "𝓤",
    "(_)", "|_|", "L|",
    "▙▟"],

  "u": [
    "𝑢", "𝗎", "𝘶", "𝙪", "𝒖", "𝐮", "𝘂", "𝚞", "ｕ",
    "u̲",
    "𝕦", "𝔲", "𝖚", "𝓊", "𝓾",
    "℧", "μ", "µ", "ᴜ", "𐌵", "ㄩ", "ᥙ", "υ", "🇺", "ⴑ", "Ʊ",
    "ᵁ", "ᶸ", "ᵘ", "◌ͧ", "ᵤ", "ᴜ", "ͧ", "ᵤ",
    "🅄", "🆄", "🅤", "ⓤ", "🄤", "⒰"],

  "uu": ["uͧ"],

  "V": ["𝑉", "𝖵", "𝘝", "𝙑", "𝑽", "𝐕", "𝗩", "𝚅",
    "𝕍", "𝔙", "𝖁", "𝒱", "𝓥",
    "℣",
    "\\/", "|/",
    "▚▞"],

  "v": ["𝑣", "𝗏", "𝘷", "𝙫", "𝒗", "𝐯", "𝘃", "𝚟", "🇻",
    "v̲",
    "𝕧",
    "𝔳", "𝖛", "𝓋", "𝓿",
    "Ɣ", "γ", "ｖ", "ᐯ", "ʋ", "ᨆ", "√",
    "ⱽ", "ᵛ", "◌ͮ", "ᵥ", "ᴠ", "ͮ",
    "🅅", "🆅", "🅥", "ⓥ", "🄥", "⒱"],

  "vv": ["vͮ"],

  "W": ["𝑊", "𝖶", "𝘞", "𝙒", "𝑾", "𝐖", "𝗪", "𝚆",
    "𝕎", "𝔚", "𝖂", "𝒲", "𝓦",
    "\\/\\/", "\\|/", "\\_|_/", "\\_:_/", "'//", "\\^/", "\\v/",
    "▚▚▘"],

  "w": ["vv",
    "𝑤", "𝗐", "𝘸", "𝙬", "𝒘", "𝐰", "𝘄", "𝚠", "ｗ", "🇼",
    "w̲",
    "𝕨", "𝓌", "𝔴", "𝖜", "𝓌", "𝔀",
    "Ɯ", "ɯ", "ꟺ",
    "Ǉ", "ω", "ᾣ", "ⲱ", "山",
    "m",
    "ʷ", "ᵂ", "ʷ", "ᴡ",
    "🅆", "🆆", "🅦", "ⓦ", "🄦", "⒲"],

  "X": ["χ", "𝑋", "𝖷", "𝘟", "𝙓", "𝑿", "𝐗", "𝗫", "𝚇",
    "𝕏", "𝔛", "𝖃", "𝒳", "𝓧",
    "}{", "><", ")("],

  "x": ["×", "𝑥", "𝘹", "𝙭", "𝒙", "𝐱", "𝘅", "𝚡", "ｘ", "🇽", "𝗑",
    "x̲",
    "𝕩",
    "𝔵", "𝖝", "𝓍", "𝔁",
    "ⲭ", "〤", "⌘", "Ж",
    "ˣ", "ˣ", "◌ͯ", "ₓ", "ͯ",
    "🅇", "🆇", "🅧", "ⓧ", "🄧", "⒳"],

  "xx": ["xͯ"],

  "Y": ["𝑌", "𝖸", "𝘠", "𝙔", "𝒀", "𝐘", "𝗬", "𝚈",
    "𝕐", "𝔜", "𝖄", "𝒴", "𝓨",
    "`/",
    "▚▘"],

  "y": ["𝗒", "𝘺", "𝙮", "𝒚", "𝐲", "𝘆", "𝚢", "🇾",
    "y̲",
    "𝕪", "𝓎", "𝔂", "ｙ",
    "Ɣ", "γ", "ℽ", "¥", "ⲩ", "丫", "ყ", "Ⴘ", "𝖞", "𝔶",
    "λ", "⅄", "ʎ",
    "ʸ", "ʏ", "ᵧ",
    "🅈", "🆈", "🅨", "ⓨ", "🄨", "⒴"],

  "Z": ["𝑍", "Ⲍ", "𝖹", "𝘡", "𝙕", "𝒁", "𝐙", "𝗭", "𝚉",
    "ℤ", "ℨ", "𝖅", "𝒵", "𝓩",
    "7_", ">_",
    "▜▙"],

  "z": ["s", "2",
    "𝗓", "𝘻", "𝙯", "𝒛", "𝐳", "𝘇", "𝚣", "ⲍ", "ｚ", "🇿",
    "z̲",
    "𝕫", "𝓏", "𝔷", "𝖟", "𝓏", "𝔃",
    "ƨ", "ζ", "≥", "𐌶",
    "ᶻ", "ᴢ", "𝆎",
    "🅉", "🆉", "🅩", "ⓩ", "🄩", "⒵"],

  "12": ["½"],
  "14": ["¼"],
  "2": ["ƻ"],
  "34": ["¾"]
};
