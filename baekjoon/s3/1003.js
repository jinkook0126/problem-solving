/*
https://www.acmicpc.net/problem/1003
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
  const N = input.shift();
  const dp = Array(41)
    .fill()
    .map((x) => [0, 0]);

  dp[0][0] = 1;
  dp[0][1] = 0;
  const ans = [];
  for (let i = 1; i <= 40; i++) {
    dp[i][0] = dp[i - 1][1];
    dp[i][1] = dp[i - 1][0] + dp[i - 1][1];
  }
  for (let i = 0; i < N; i++) {
    const t = input[i];
    ans.push([dp[t][0], dp[t][1]].join(" "));
  }
  console.log(ans.join("\n"));
  process.exit();
});
