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
  const L = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const J = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const dp = Array(N + 1)
    .fill()
    .map(() => Array(100).fill(0));
  L.unshift(0);
  J.unshift(0);
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j < 100; j++) {
      if (L[i] <= j) {
        dp[i][j] = Math.max(dp[i - 1][j - L[i]] + J[i], dp[i - 1][j]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  console.log(dp[N][99]);
  process.exit();
});
