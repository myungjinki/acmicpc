const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
const numberArray = input.split(" ").map((e) => Number(e));
const answer = numberArray[0] + numberArray[1];
console.log(answer);
