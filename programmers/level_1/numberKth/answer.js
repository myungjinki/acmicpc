function solution(array, commands) {
  var answer = [];
  commands.map((value) => {
    var temp = array.slice();
    temp = temp
      .splice(value[0] - 1, value[1] - value[0] + 1)
      .sort((a, b) => a - b);
    answer.push(temp[value[2] - 1]);
  });
  return answer;
}
