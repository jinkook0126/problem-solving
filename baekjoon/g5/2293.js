/*
https://www.acmicpc.net/problem/2293
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
  const [n, k] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const arr = input.map((x) => +x);
  const dp = Array(k + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = arr[i]; j <= k; j++) {
      dp[j] = dp[j - arr[i]] + dp[j];
    }
  }
  console.log(dp[k]);
  process.exit();
});
