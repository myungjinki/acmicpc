const N = +require('fs').readFileSync('../input/2.txt').toString().trim();
let answer = [];
answer[1] = 0;
for (let i = 2; i <= N; i++) {
    answer[i] = answer[i - 1] + 1;
    if (i % 2 == 0) answer[i] = Math.min(answer[i], answer[i / 2] + 1)
    if (i % 3 == 0) answer[i] = Math.min(answer[i], answer[i / 3] + 1)
}
console.log(answer[N]);