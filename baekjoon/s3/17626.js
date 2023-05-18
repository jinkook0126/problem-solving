/*
https://www.acmicpc.net/problem/17626
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
  const n = input.shift();
  const dp = Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    let min = Infinity;
    for (let j = 1; j * j <= i; j++) {
      min = Math.min(dp[i - j * j], min);
    }
    dp[i] = min + 1;
  }
  console.log(dp[n]);
  process.exit();
});
