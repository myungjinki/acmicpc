const fs = require('fs');
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N,M] = inputs[0].split(" ").map(Number);
const map = Array.from(new Array(N+1), () => new Array(N+1));
const visited = new Array(N+1).fill(false);

for(let i = 1; i <= M; i++){
    const [row, col] = inputs[i].split(" ").map(Number);
    map[row][col] = map[col][row] = 1;
}

let result = 0;

for(let i = 1; i <= N; i++){
    if(!visited[i]){
        result += 1;
        dfs(i);
    }
}

function dfs(V){
    visited[V] = true;
    for(let i = 1; i <= N; i++){
        if(map[V][i] === 1 && !visited[i]){
            dfs(i);
        }
    }
}

console.log(result);