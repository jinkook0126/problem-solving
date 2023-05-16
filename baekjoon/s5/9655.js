/*
https://www.acmicpc.net/problem/9655
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
  const N = input.shift();
  const dp = Array(N + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= N; i++) {
    dp[i] = Math.min(dp[i - 1] + 1, dp[i - 3] + 1);
  }
  console.log(dp[N] % 2 === 1 ? "SK" : "CY");
  process.exit();
});
