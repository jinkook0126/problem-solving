/*
https://www.acmicpc.net/problem/14501
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
  arr.push([0, 0]);
  const dp = Array(N + 1).fill(0);
  for (let i = N - 1; i >= 0; i--) {
    const [day, cost] = arr[i];
    if (day + i > N) {
      dp[i] = dp[i + 1];
    } else {
      dp[i] = Math.max(dp[i + 1], dp[i + day] + cost);
    }
  }
  console.log(dp[0]);
  process.exit();
});
