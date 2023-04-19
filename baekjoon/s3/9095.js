/*
https://www.acmicpc.net/problem/9095
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
  input.shift();
  input.forEach((n) => {
    const dp = [];
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;
    for (let i = 4; i <= n; i++) {
      dp[i] = dp[i - 2] + dp[i - 1] + dp[i - 3];
    }
    console.log(dp[n]);
  });
  process.exit();
});
