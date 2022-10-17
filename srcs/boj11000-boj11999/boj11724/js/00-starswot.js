let input = require('fs').readFileSync('../input/1.txt').toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(Number);
let result = 0;
const graph = [];

for (i = 1; i <= N; i++) {
    graph[i] = [];
}

for (i = 1; i <= input.length; i++) {
    let line = input[i].split(' ');
    graph[+line[0]].push(+line[1]);
    graph[+line[1]].push(+line[0]);
}
console.log(graph);