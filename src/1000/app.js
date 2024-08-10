const input = require("fs").readFileSync("/dev/stdin").toString();
const [a, b] = input.split(" ").map((e) => Number(e));
console.log(a + b);
