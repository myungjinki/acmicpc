const [N, M] = require('fs')
                .readFileSync('../input/1.txt')
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
    for (let i = index; i <= N; i++) {
        stack.push(i);
        solution(i + 1, cnt + 1);
        stack.pop();
    }
}

solution(1, 0);
console.log(answer);
