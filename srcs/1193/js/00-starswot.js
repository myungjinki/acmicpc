const fs = require('fs');

function input() {
    const input = fs.readFileSync('/dev/stdin').toString();
    const number = parseInt(input);
    return number;
}

function boj1193(X) {
    let count = 1;
    let x = 1;
    let y = 1;
    let sum = 0;
    
    while (count != X) {
        sum = x + y;
        if (sum % 2 == 0 && x == 1) {
            y++;
        }
        else if (sum % 2 == 1 && y == 1) {
            x++;
        }
        else if (sum % 2 == 1) {
            x++;
            y--;
        }
        else if (sum % 2 == 0) {
            x--;
            y++;
        }
        count++;
    }
    return x + "/" + y;
}

const X = input();
const answer = boj1193(X);
console.log(answer);
