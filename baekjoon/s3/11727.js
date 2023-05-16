/*
https://www.acmicpc.net/problem/11727
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
  dp[0] = 0n;
  dp[1] = 1n;
  dp[2] = 3n;
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] * 2n) % 10007n;
  }
  console.log(dp[n].toString());
  process.exit();
});
