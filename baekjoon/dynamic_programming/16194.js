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
  const dp = Array(N + 1).fill(Infinity);
  dp[0] = 0;
  arr.unshift(0);
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j <= N; j++) {
      dp[j] = Math.min(dp[j], arr[i] + dp[j - i]);
    }
  }
  console.log(dp[N]);
  process.exit();
});
