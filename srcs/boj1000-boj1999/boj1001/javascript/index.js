const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
const array = input.split(" ");
const seq = array.map((e) => Number(e));
const ans = seq[0] - seq[1];
console.log(ans);
