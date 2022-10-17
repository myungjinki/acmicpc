const fs = require("fs");
const line = fs.readFileSync("/dev/stdin").toString().split("\n");
let queue = [];
let answer = "";
for (let i = 1; i < line.length - 1; i++) {
    command = line[i].split(" ");
    if (command[0] == "push") {
        queue.push(command[1]);
    } else if (command[0] == "pop") {
        if (queue.length == 0) {
            answer += "-1\n";
        } else {
            answer += queue.shift() + "\n";
        }
    } else if (command[0] == "size") {
        answer += queue.length + "\n";
    } else if (command[0] == "empty") {
        if (queue.length == 0) {
            answer += "1\n";
        } else {
            answer += "0\n";
        }
    } else if (command[0] == "front") {
        if (queue.length == 0) {
            answer += "-1\n";
        } else {
            answer += queue[0] + "\n";
        }
    } else if (command[0] == "back") {
        if (queue.length == 0) {
            answer += "-1\n";
        } else {
            answer += queue[queue.length - 1] + "\n";
        }
    }
}
answer = answer.substring(0, answer.length - 1);
console.log(answer);
