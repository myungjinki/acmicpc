// const [N, M] = require('fs').readFileSync('../input/2.txt').toString().split(' ').map(e => +e);
const [N, M] = require('fs').readFileSync('/dev/stdin').toString().split(' ').map(e => +e);

let answer = '';
let visited = Array(N + 1).fill(false);

function solution(visited, current, targetLength) {
    if (current.length === targetLength) {
        answer += current.join(' ') + '\n';
        return ;
    }
    for (let i = 1; i < visited.length; i++) {
        if (visited[i] === false) {
            current.push(i);
            visited[i] = true;
            solution(visited, current, targetLength);
            current.pop();
            visited[i] = false;
        }
    }
}

solution(visited, [], M);
console.log(answer.trim());
