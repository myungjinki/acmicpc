let input = require('fs').readFileSync('../input/1.txt').toString().trim().split('\n');
const N = +input.shift();
const map = input.map(e => e.split(' '));
const dir = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
]
let answer = [];
const max = Math.max(...map.flat());

for (let i = 0; i <= max; i++) {
    bfs(i);
}

function bfs(rain) {
    let queue = [];
    let visited = Array.from(new Array(N), () => new Array(N));
    let cnt = 0;
    
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {

            queue.push([0, 0]);
            visited[0][0] == 1;

            while (queue.length) {
                const [x, y] = queue.shift();
                for (let i = 0; i < 4; i++) {
                    const posX = x + dir[i][0];
                    const poxY = y + dir[i][1];
        
                    if (posX >= 0 && posX < map[0].length && poxY >= 0 && poxY < map.length && visited[posX][posY] == 0) {
                        queue.push([posX, posY]);
                        visited[posX][poxY] = 1;
                    }
                }
            }
        }
    }
}


answer.sort((a, b) => b - a);
console.log(answer[0]);