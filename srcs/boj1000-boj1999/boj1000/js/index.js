const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();
const array = input.split(" ").map((e) => Number(e));
console.log(array[0] + array[1]);
