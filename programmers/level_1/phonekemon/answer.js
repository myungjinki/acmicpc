function solution(nums) {
  var length = nums.length;
  var arr = nums.filter((value, index) => {
    return nums.indexOf(value) === index;
  });
  if (arr.length > length / 2) {
    return length / 2;
  } else {
    return arr.length;
  }
}
