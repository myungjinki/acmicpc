const input = require('fs').readFileSync('../input/2.txt').toString().trim().split('\n');
const [N, K] = input.shift().split(' ').map(e => +e);
const money = input.map(e => +e);
let answer = 0;
let rest = K;
for (i = N - 1; i >= 0; i--) {
    answer += Math.floor(rest / money[i]);
    rest %= money[i];
}
console.log(answer);