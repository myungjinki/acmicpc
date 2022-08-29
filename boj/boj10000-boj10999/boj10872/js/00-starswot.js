const fs = require('fs');

function input() {
    const input = fs.readFileSync('/dev/stdin').toString();
    const number = parseInt(input);
    return number;
}

function factorial(number) {
    if (number === 0) {
        return 1;
    }
    return number * factorial(number - 1);
}

const N = input();
const answer = factorial(N);
console.log(answer);