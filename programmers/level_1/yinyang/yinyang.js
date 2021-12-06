function solution(absolutes, signs) {
  var answer = 0;
  absolutes.map((m, i) => {
    if (signs[i] == true) {
      answer += m;
    } else {
      answer -= m;
    }
  });
  return answer;
}
