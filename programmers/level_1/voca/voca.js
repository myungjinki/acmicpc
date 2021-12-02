function solution(s) {
  var numberArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  var re;
  numberArr.forEach((value, index, array) => {
      re = new RegExp(value, 'g');
      s = s.replace(re, String(index))
  });
  return Number(s);
}