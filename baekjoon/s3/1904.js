/*
https://www.acmicpc.net/problem/2193
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
  dp[0] = 0n;
  dp[1] = 1n;
  dp[2] = 2n;
  dp[3] = 3n;
  for (let i = 4; i <= N; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 15746n;
  }
  console.log(dp[N].toString(0));
  process.exit();
});
