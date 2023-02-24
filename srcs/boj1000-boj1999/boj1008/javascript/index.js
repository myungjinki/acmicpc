const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const [a, b] = input.split(" ").map((e) => Number(e));
const answer = a / b;
console.log(answer);
