const fs = require("fs");
const line = fs.readFileSync("/dev/stdin").toString().split("\n");
let stack = [];
for (let i = 1; i < line.length - 1; i++) {
    if (line[i] != "0") {
        stack.push(Number(line[i]));
    } else if (stack.length != 0) {
        stack.pop();
    }
}
let answer = 0;
let length = stack.length;
for (let i = 0; i < length; i++) {
    answer += stack.pop();
}
console.log(answer);
