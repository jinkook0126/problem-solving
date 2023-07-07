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
  const dp = Array(N + 1).fill(Number.MIN_SAFE_INTEGER);
  for (let i = 1; i <= arr.length; i++) {
    dp[i] = Math.max(arr[i - 1] + dp[i - 1], arr[i - 1]);
  }
  console.log(Math.max(...dp));
  process.exit();
});
