// let input = require('fs').readFileSync('../input/2.txt').toString().split('\n');
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, M, V] = input.shift().split(' ').map(Number);
let graph = [...new Array(N + 1)].map(() => []);
for (let i = 0; i < M; i++) {
    const [x, y] = input.shift().split(' ').map(Number);
    graph[x].push(y);
    graph[y].push(x);
}
graph.map(e => e.sort((a, b) => a - b));
let dfsVisited = Array(N + 1).fill(false);

function solution (N, M, V, graph) {
    dfs(V);
    return dfsAnswer.join(' ') + '\n' + bfs(V).join(' ');
}

let dfsAnswer = [];
function dfs(startVertex) {
    if (dfsVisited[startVertex] === true)
        return ;
    dfsVisited[startVertex] = true;
    dfsAnswer.push(startVertex);
    for (let i = 0; i < graph[startVertex].length; i++)
        dfs(graph[startVertex][i]);
}

function bfs(startVertex) {
    let bfsAnswer = [];
    let queue = [];
    let bfsVisited = Array(N + 1).fill(false);
    
    queue.push(startVertex);
    bfsAnswer.push(startVertex);
    while (queue.length > 0) {
        let current = queue.shift();
        bfsVisited[current] = true;
        for (let i = 0; i < graph[current].length; i++) {
            if (bfsVisited[graph[current][i]] == false) {
                bfsAnswer.push(graph[current][i]);
                bfsVisited[graph[current][i]] = true;
                queue.push(graph[current][i]);
            }
        }
    }
    return bfsAnswer;
}

console.log(solution(N, M, V, graph));
