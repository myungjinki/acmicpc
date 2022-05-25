for (let i = 1; i < 4; i++) {
    const [N, M] = require('fs').readFileSync(`../input/${i}.txt`).toString().trim().split(' ').map(Number);
    
    let answer = '';
    let temp = [];
    let visited = Array(N + 1).fill(false);
    
    function dfs(start) {
        if (start === M) {
            answer += `${temp.join(' ')}\n`;
        }
        for (let i = 1; i <= N; i++) {
            if (visited[i] === true)
                continue ;
            visited[i] = true;
            temp.push(i);
            dfs(start + 1);
            temp.pop();
            visited[i] = false;
        }
    }
    
    dfs(0);
    console.log(answer);
}

