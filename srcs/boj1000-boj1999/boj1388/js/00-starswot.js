const input = require('fs').readFileSync(0).toString().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
const map = input.map((value) => value.split(''));

function solution(map, N, M) {
    const visited = Array.from(Array(N), () => Array(M).fill(false));
    let result = 0;
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (visited[i][j] === true) continue;
            result++;
            visited[i][j] = true;
            const shape = map[i][j];
            if (shape == '-') {
                for (let k = j + 1; k < M; k++) {
                    if (map[i][k] == '|') break ;
                    visited[i][k] = true;
                }
            }
            if (shape == '|') {
                for (let k = i + 1; k < N; k++) {
                    if (map[k][j] == '-') break ;
                    visited[k][j] = true;
                }
            }
        }
    }
    return result;
}

console.log(solution(map, N, M));