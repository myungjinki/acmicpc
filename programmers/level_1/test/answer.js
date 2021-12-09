function solution(answers) {
  var answer = [];
  var count = [0, 0, 0];
  var student1 = [1, 2, 3, 4, 5];
  var student2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  answers.map((v, i) => {
    if (v === student1[i % student1.length]) {
      count[0]++;
    }
    if (v === student2[i % student2.length]) {
      count[1]++;
    }
    if (v === student3[i % student3.length]) {
      count[2]++;
    }
  });
  var max = Math.max.apply(null, count);
  var index = count.indexOf(max);
  while (index != -1) {
    answer.push(index + 1);
    index = count.indexOf(max, index + 1);
  }
  return answer;
}
