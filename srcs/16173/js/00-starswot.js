const inputs = require('fs').readFileSync(0).toString().trim().split('\n');
const N = Number(inputs.shift());
const map = inputs.map(line => line.split(' ').map(Number));

let queue = [];
let visited = Array.from(Array(N), () => Array(N).fill(0));

const dx = [1, 0];
const dy = [0, 1];

const dfs = function (startNode) {
    queue.push(startNode);

    while (queue.length > 0) {
        const curr = queue.pop();
        const dist = map[curr.x][curr.y];
        if (dist === -1)
            return ("HaruHaru");
        
        for (let i = 0; i < dx.length; i++) {
            const nx = curr.x + dx[i] * dist;
            const ny = curr.y + dy[i] * dist;
    
            if (nx >= 0 && nx < N && ny >= 0 && ny < N && visited[nx][ny] === 0) {
                visited[nx][ny] = 1;
                queue.push({x: nx, y: ny});
            }
        }
    }
    return "Hing";
}

console.log(dfs({x:0, y:0}));