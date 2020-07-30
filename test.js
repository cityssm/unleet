"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const testWords = ["1337 $P33K",
    "$ecr37 b@d w0rdz",
    "0rg@ni℠",
    "br¼n"];
for (const testWord of testWords) {
    console.log("Testing " + testWord);
    console.log(index_1.unleet(testWord));
    console.log();
}
