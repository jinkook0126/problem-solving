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
  const dp = Array(N + 1)
    .fill()
    .map(() => Array(2).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= N; i++) {
    dp[i][0] = dp[i - 1][1];
    dp[i][1] = dp[i - 1][0] + dp[i - 1][1];
  }
  console.log(dp[N].join(" "));
  process.exit();
});
