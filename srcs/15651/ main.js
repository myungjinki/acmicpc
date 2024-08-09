const [N, M] = require('fs')
                .readFileSync('../input/2.txt')
                .toString()
                .trim()
                .split(' ')
                .map(Number);

let answer = '';
let stack = [];

function solution(index, cnt) {
    if (cnt == M) {
        answer += stack.join(' ') + '\n';
        return ;
    }
    for (let i = 1; i <= N; i++) {
        stack.push(i);
        solution(i, cnt + 1);
        stack.pop();
    }
}

solution(1, 0);
console.log(answer);
