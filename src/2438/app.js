let input = require("fs").readFileSync("/dev/stdin").toString();
const N = parseInt(input);

for (i = 1; i <= N; i++) {
  let output = "";
  for (j = 0; j < i; j++) {
    output += "*";
  }
  console.log(output);
}
