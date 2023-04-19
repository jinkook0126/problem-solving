/*
https://www.acmicpc.net/problem/2839
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
  let N = input[0];
  let sum = 0;
  if (N === 4 || N === 7) {
    console.log(-1);
    return;
  }
  while (1) {
    if (N % 5 === 0) {
      sum += parseInt(N / 5);
      break;
    }
    sum += 1;
    N -= 3;
  }
  console.log(sum);
  process.exit();
});
