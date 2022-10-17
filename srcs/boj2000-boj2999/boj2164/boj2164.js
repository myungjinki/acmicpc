const num = Number(require("fs").readFileSync("/dev/stdin").toString());
let max = 1;
while (max < num) max *= 2;
console.log(max - (max - num) * 2);
