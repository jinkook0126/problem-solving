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
  for (let i = 0; i <= 9; i++) {
    dp[1][i] = 1n;
  }
  for (let i = 2; i <= N; i++) {
    for (let j = 0; j < 10; j++) {
      if (j === 0) {
        dp[i][j] = 1n;
      } else {
        dp[i][j] = (dp[i][j - 1] + dp[i - 1][j]) % 10007n;
      }
    }
  }

  console.log(
    (dp[N].reduce((prev, curr) => prev + curr, 0n) % 10007n).toString()
  );
  process.exit();
});
