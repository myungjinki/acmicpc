let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input.shift();
const line = input.map(e => e.split(' ').map(Number));
line.sort((a, b) => {
    if (a[0] < b[0]) {
        return -1;
    }
    if (a[0] > b[0]) {
        return 1;
    }
});
line.sort((a, b) => {
    if (a[1] < b[1]) {
        return -1;
    }
    if (a[1] > b[1]) {
        return 1;
    }
});
let answer = '';
line.map(e => {
    answer += e[0];
    answer += ' ';
    answer += e[1];
    answer += '\n';
})
console.log(answer.trim());