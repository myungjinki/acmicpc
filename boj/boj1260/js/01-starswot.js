const fs = require('fs');
const input = fs.readFileSync('../input/1.txt').toString().trim().split('\n');

const [node, edge, nodeStart] = input.shift().split(' ').map(Number);
const nodeConnection = input.map((connection) => 
    connection.split(' ').map(Number)
);

const adjacencyList = Array.from(Array(node + 1), () => new Array());

console.log(adjacencyList);