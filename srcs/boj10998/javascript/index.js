const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
const numberSequence = input.split(" ").map((e) => Number(e));
const [a, b] = numberSequence;
const answer = a * b;
console.log(answer);
