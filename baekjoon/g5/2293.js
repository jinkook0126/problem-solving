/*
https://www.acmicpc.net/problem/2293
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
  const [n, k] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const arr = input.map((x) => +x);
  const dp = Array(n + 1)
    .fill()
    .map(() => Array(k + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      if (j < arr[i - 1]) {
        dp[i][j] = dp[i - 1][j];
      } else {
        if (arr[i - 1] === 1) {
          dp[i][j] = dp[i - 1][j] + 1;
        } else {
          dp[i][j] = dp[i - 1][j] + parseInt(j / arr[i - 1]);
        }
      }
    }
  }
  console.log(dp);
  console.log(dp[n][k]);
  process.exit();
});
