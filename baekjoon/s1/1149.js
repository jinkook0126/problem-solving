/*
https://www.acmicpc.net/problem/1149
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
  const N = parseInt(input.shift());
  const arr = input.map((x) => x.split(" ").map((x) => +x));
  arr.unshift([0, 0, 0]);
  const dp = Array(N + 1)
    .fill()
    .map(() => Array(3).fill(0));

  for (let i = 1; i <= N; i++) {
    dp[i][0] = Math.min(arr[i][0] + dp[i - 1][1], arr[i][0] + dp[i - 1][2]);
    dp[i][1] = Math.min(arr[i][1] + dp[i - 1][0], arr[i][1] + dp[i - 1][2]);
    dp[i][2] = Math.min(arr[i][2] + dp[i - 1][0], arr[i][2] + dp[i - 1][1]);
  }
  console.log(Math.min(...dp[N]));
  process.exit();
});
