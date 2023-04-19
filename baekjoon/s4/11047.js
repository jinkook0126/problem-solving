/*
https://www.acmicpc.net/problem/11047
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  let [N, K] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  let sum = 0;
  input.reverse().forEach((x) => {
    if (x <= K) {
      sum += Math.floor(K / x);
      K = K % x;
    }
  });
  console.log(sum);
  process.exit();
});
