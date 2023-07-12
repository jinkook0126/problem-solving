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
  const arr = input
    .shift()
    .split(" ")
    .map((x) => +x);
  arr.unshift(0);
  const dp = Array(N + 1)
    .fill()
    .map(() => Array(N + 1).fill(0));
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (i > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - i] + arr[i]);
      }
    }
  }
  console.log(dp[N][N]);
  process.exit();
});
