/*
https://www.acmicpc.net/problem/2579
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
  const n = input[0];
  const dp = Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = input[1];
  dp[2] = input[1] + input[2];
  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(dp[i - 2] + input[i], dp[i - 3] + input[i - 1] + input[i]);
  }
  console.log(dp[n]);
  process.exit();
});
