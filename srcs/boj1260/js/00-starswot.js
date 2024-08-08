let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [N, M, V] = input.shift().split(" ").map(Number);

/*
 * 2차원 빈 배열 만들기
 * 배열의 인덱스는 vertex 번호
 * vertex마다 연결된 다른 vertex push
 * 연결된 vertex 정렬
*/
let graph = [...new Array(N + 1)].map(() => []);
for (let i = 0; i < M; i++) {
    const [x, y] = input.shift().split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
}
graph.map(element => element.sort((a, b) => a - b));

let dfsVisited = [];
const dfs = (start) => {
    if (dfsVisited.includes(start)) return ;
    dfsVisited.push(start);
    const cur = start;
    for (let i = 0; i < graph[cur].length; i++) {
        if (!dfsVisited.includes(graph[cur][i])) {
            dfs(graph[cur][i]);
        }
    }
}

const bfs = (start) => {
    let visited = [];
    let stack = [];

    stack.push(start);
    visited.push(start);

    while (stack.length) {
        const cur = stack.shift();
        for (let i = 0; i < graph[cur].length; i++) {
            if (!visited.includes(graph[cur][i])) {
                stack.push(graph[cur][i]);
                visited.push(graph[cur][i]);
            }
        }
    }
    return (visited);
}

dfs(V);
console.log(dfsVisited.join(" "));
console.log(bfs(V).join(" "));
