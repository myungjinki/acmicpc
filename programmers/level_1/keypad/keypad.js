function findPos(number) {
  var Pos = [0, 0];
  var keypad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 0, 11],
  ];
  keypad.forEach((line, x, array) => {
    line.forEach((value, y, array) => {
      if (number == value) {
        Pos = [x, y];
      }
    });
  });
  return Pos;
}

function getDist(posA, posB) {
  return Math.abs(posA[0] - posB[0]) + Math.abs(posA[1] - posB[1]);
}

function solution(numbers, hand) {
  var answer = "";
  var leftPos = [3, 0];
  var rightPos = [3, 2];
  var destPos;
  numbers.forEach((value, index, array) => {
    if (value == 1 || value == 4 || value == 7) {
      answer += "L";
      leftPos = findPos(value);
    } else if (value == 3 || value == 6 || value == 9) {
      answer += "R";
      rightPos = findPos(value);
    } else {
      destPos = findPos(value);
      if (getDist(destPos, rightPos) < getDist(destPos, leftPos)) {
        answer += "R";
        rightPos = findPos(value);
      } else if (getDist(destPos, rightPos) > getDist(destPos, leftPos)) {
        answer += "L";
        leftPos = findPos(value);
      } else {
        if (hand == "right") {
          answer += "R";
          rightPos = findPos(value);
        } else if (hand == "left") {
          answer += "L";
          leftPos = findPos(value);
        }
      }
    }
  });
  return answer;
}
