const line = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let answer = 0;
let stack = [];
for (let i = 1; i <= +line[0]; i++) {
    stack = [];
    line[i].split("").map((ele) => {
        if (stack.length != 0 && ele == stack[stack.length - 1]) {
            stack.pop(ele);
        } else {
            stack.push(ele);
        }
    });
    if (stack.length == 0) {
        answer++;
    }
}
console.log(answer);
