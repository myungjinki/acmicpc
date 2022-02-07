const fs = require("fs");
const line = fs.readFileSync("/dev/stdin").toString();
const num = Number(line);
let max = 1;
let answer = "";
while (max < num) {
    max *= 2;
}
answer += max - (max - num) * 2;
console.log(answer);
