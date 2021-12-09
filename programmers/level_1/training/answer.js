function solution(n, lost, reserve) {
  lost.sort();
  reserve.sort();
  var cant = 0;
  for (var i = 0; i < lost.length; i++) {
    for (var j = 0; j < reserve.length; j++) {
      if (lost[i] == reserve[j]) {
        lost.splice(i, 1);
        reserve.splice(j, 1);
        i--;
        break;
      }
    }
  }
  while (lost.length != 0) {
    var reserveLen = reserve.length;
    for (var i = 0; i < reserve.length; i++) {
      if (lost[0] == reserve[i] - 1 || lost[0] == reserve[i] + 1) {
        reserve.splice(i, 1);
        break;
      }
    }
    if (reserve.length == reserveLen) {
      cant++;
    }
    lost.splice(0, 1);
  }
  return n - cant;
}
