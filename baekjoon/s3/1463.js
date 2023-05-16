/*
https://www.acmicpc.net/problem/1463
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
  dp[2] = 1;
  dp[3] = 1;
  for (let i = 4; i <= N; i++) {
    if (i % 3 === 0 && i % 2 === 0) {
      dp[i] = Math.min(dp[i - 1] + 1, dp[i / 3] + 1, dp[i / 2] + 1);
    } else if (i % 3 === 0) {
      dp[i] = Math.min(dp[i - 1] + 1, dp[i / 3] + 1);
    } else if (i % 2 === 0) {
      dp[i] = Math.min(dp[i - 1] + 1, dp[i / 2] + 1);
    } else {
      dp[i] = dp[i - 1] + 1;
    }
  }
  console.log(dp[N]);
  process.exit();
});
