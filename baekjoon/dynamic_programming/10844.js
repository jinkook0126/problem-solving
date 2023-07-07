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
    .map(() => Array(10).fill(0n));
  for (let i = 1; i <= 9; i++) {
    dp[1][i] = 1n;
  }
  for (let i = 2; i <= N; i++) {
    for (let j = 0; j <= 9; j++) {
      if (j === 0) {
        dp[i][0] = dp[i - 1][1] % 1000000000n;
      } else if (j === 9) {
        dp[i][9] = dp[i - 1][8] % 1000000000n;
      } else {
        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000n;
      }
    }
  }
  const sum = dp[N].reduce((prev, curr) => prev + curr, 0n);
  console.log((sum % 1000000000n).toString());
  process.exit();
});
