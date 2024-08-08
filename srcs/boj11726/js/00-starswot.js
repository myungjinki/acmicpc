const N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = [];
answer[1] = 1;
answer[2] = 2;
for (let i = 3; i <= N; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % 10007;
}
console.log(answer[N]);