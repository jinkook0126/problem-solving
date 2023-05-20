/*
https://www.acmicpc.net/problem/1932
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
  arr.unshift([]);
  const dp = Array(N + 1)
    .fill()
    .map(() => Array(N).fill(0));
  dp[1][0] = arr[1][0];
  for (let i = 1; i <= N; i++) {
    const len = arr[i].length;
    for (let j = 0; j < len; j++) {
      if (j === 0) {
        dp[i][0] = dp[i - 1][0] + arr[i][0];
      } else if (j === len - 1) {
        dp[i][j] = dp[i - 1][i - 2] + arr[i][j];
      } else {
        dp[i][j] = Math.max(
          dp[i - 1][j - 1] + arr[i][j],
          dp[i - 1][j] + arr[i][j]
        );
      }
    }
  }
  console.log(dp);
  console.log(Math.max(...dp[N]));
  process.exit();
});
