function solution(lottos, win_nums) {
  var zeroCnt = lottos.filter((element) => element === 0).length;
  var correctCnt = lottos.filter((element) =>
    win_nums.includes(element)
  ).length;
  var rankMin = 7 - correctCnt;
  if (correctCnt == 0) rankMin = 6;
  var rankMax = 7 - correctCnt - zeroCnt;
  if (rankMax == 7) rankMax = 6;
  var answer = [rankMax, rankMin];
  return answer;
}
