import { unleet } from "./index";

const testWords = ["1337 $P33K",
  "$ecr37 b@d w0rdz",
  "0rg@ni℠",
  "br¼n"];

for (const testWord of testWords) {

  console.log("Testing " + testWord);
  console.log(unleet(testWord));
  console.log();
}
