function solution(board, moves) {
  var arr = [];
  var answer = 0;
  moves.map((m, idx) => {
    for (let b of board) {
      if (b[m - 1] != 0) {
        arr.push(b[m - 1]);
        b[m - 1] = 0;
        break;
      }
    }
  });
  var arr2 = [];
  arr.map((r) => {
    if (arr2[arr2.length - 1] == r) {
      answer += 2;
      arr2.pop(r);
    } else {
      arr2.push(r);
    }
  });
  return answer;
}
