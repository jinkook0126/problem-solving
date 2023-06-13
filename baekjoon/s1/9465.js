const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const T = parseInt(input.shift());
  const ans = [];
  for (let q = 0; q < T; q++) {
    const n = input.splice(0, 1);
    const arr = input.splice(0, 2).map((x) => x.split(" ").map((x) => +x));
    const dp = Array(2)
      .fill()
      .map(() => Array(n).fill(0));
    dp[0][0] = arr[0][0];
    dp[1][0] = arr[1][0];

    dp[0][1] = dp[1][0] + arr[0][1];
    dp[1][1] = dp[0][0] + arr[1][1];
    for (let i = 2; i < n; i++) {
      dp[0][i] = Math.max(dp[1][i - 2], dp[1][i - 1]) + arr[0][i];
      dp[1][i] = Math.max(dp[0][i - 2], dp[0][i - 1]) + arr[1][i];
    }
    ans.push(Math.max(dp[0][n - 1], dp[1][n - 1]));
  }
  console.log(ans.join("\n"));
  process.exit();
});
