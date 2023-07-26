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
  arr.unshift(0);
  const dp = Array(N + 1).fill(Infinity);
  dp[1] = 0;
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= arr[i]; j++) {
      if (i + j > N) continue;
      dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
    }
  }
  console.log(dp[N] === Infinity ? -1 : dp[N]);
  process.exit();
});
