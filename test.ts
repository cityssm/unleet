import { unleet } from "./index";

const testWords = ["1337 $P33K",
  "$ecr37 b@d w0rdz",
  "0rg@ni℠",
  "br¼n",
  "+È$7!ₙ9",
  "ⓑⓐⓛⓛⓞⓞⓝⓢ"
];

for (const testWord of testWords) {

  console.log("Testing " + testWord);
  console.log(unleet(testWord).join(", "));
  console.log();
}
