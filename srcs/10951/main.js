const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
for (let i = 0; i < input.length - 1; i++) {
    let nums = input[i].split(" ");
    console.log(Number(nums[0]) + Number(nums[1]));
}
