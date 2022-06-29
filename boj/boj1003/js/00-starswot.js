const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const T = +input.shift();
const arrayN = input.map((e) => +e);
for (let i = 0; i < arrayN.length; i++) {
  const answer = countFibo(arrayN[i]);
  console.log(answer.join(" "));
}

function countFibo(N) {
  let answer = Array(N + 1);
  answer[0] = [1, 0];
  answer[1] = [0, 1];
  for (let i = 2; i <= N; i++) {
    answer[i] = Array(2);
    answer[i][0] = answer[i - 1][0] + answer[i - 2][0];
    answer[i][1] = answer[i - 1][1] + answer[i - 2][1];
  }
  return answer[N];
}
