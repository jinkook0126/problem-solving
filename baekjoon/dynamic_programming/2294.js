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
  const coin = input.map((x) => +x);
  coin.unshift(0);
  const dp = Array(k + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = coin[i]; j <= k; j++) {
      dp[j] = Math.min(dp[j], dp[j - coin[i]] + 1);
    }
  }
  console.log(dp[k] === Infinity ? -1 : dp[k]);
  process.exit();
});
