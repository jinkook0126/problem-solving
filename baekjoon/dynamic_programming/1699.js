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
    .map((x, i) => i);
  for (let i = 1; i <= N; i++) {
    const sqrt = parseInt(Math.sqrt(i));
    for (let j = 1; j <= sqrt; j++) {
      dp[i] = Math.min(dp[i], dp[i - Math.pow(j, 2)] + 1);
    }
  }
  console.log(dp[N]);
  process.exit();
});
