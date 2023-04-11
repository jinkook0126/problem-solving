/*
https://www.acmicpc.net/problem/15964
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line.trim()));
}).on("close", function () {
  const N = input[0];

  const factorial = (l) => {
    if (l === 0) {
      return 1;
    } else {
      return l * factorial(l - 1);
    }
  };
  console.log(factorial(N));
  process.exit();
});
