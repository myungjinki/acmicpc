let input = require('fs')
            .readFileSync('../input/0.txt')
            .toString()
            .trim()
            .split('\n');

let N = +input.shift();
let An = input.shift().split(' ').map(e => +e);
let op = [];
let opCnt = input.shift().split(' ').map(e => +e);
for (let i = 0; i < 4; i++) {
    if (opCnt[i] > 0) {
        if (i == 0)
            op.push('+');
        else if (i == 1)
            op.push('-');
        else if (i == 2)
            op.push('*');
        else if (i == 3)
            op.push('-');
    }
}

function solution(An, cnt) {
    if (cnt == N) {
        return ;
    }
    for (let i = 1; i < opCnt; i++) {
        
    }
}

console.log(solution(An, 0));