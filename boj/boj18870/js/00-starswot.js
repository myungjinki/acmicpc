const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const N = +input.shift();
let array = input[0].split(' ').map(Number);
let cnt = 1;
array = array.map(e => [cnt++, e])
array.sort(function (a, b) {
    if (a[1] < b[1])
        return -1;
    return 1;
})
let num = 0;
let before;
for (let i = 0; i < N; i++) {
    if (before == array[i][1])
        num--;
    array[i].push(num++);
    before = array[i][1];
}
array.sort(function (a, b) {
    if (a[0] < b[0])
        return -1;
    return 1;
})
let answer = '';
for (let i = 0; i < N; i++) {
    answer += array[i][2];
    answer += ' ';
}
console.log(answer);
