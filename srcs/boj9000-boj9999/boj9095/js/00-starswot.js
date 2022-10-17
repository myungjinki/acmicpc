const input = require('fs').readFileSync('../input/1.txt').toString().trim().split('\n');
const N = +input.shift();
const arr = input.map(e => +e);
let answer = [0, 1, 2, 4];
const max = Math.max(...arr);
for (let i = 4; i <= max; i++) {
    answer[i] = answer[i - 1] + answer[i - 2] + answer[i - 3];
}
arr.map(e => console.log(answer[e]));