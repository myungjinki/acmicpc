const [N, M] = require('fs')
                .readFileSync('../input/2.txt')
                .toString()
                .trim()
                .split(' ')
                .map(Number);

let answer = '';
let stack = [];
let visited = Array(N + 1).fill(false);

function solution(index, cnt) {
    if (cnt == M) {
        answer += stack.join(' ') + '\n';
        return ;
    }
    for (let i = 1; i <= N; i++) {
        if (visited[i] === false) {
            visited[i] = true;
            stack.push(i);
            solution(i + 1, cnt + 1);
            stack.pop();
            visited[i] = false;
        }
    }
}

solution(1, 0);
console.log(answer);
