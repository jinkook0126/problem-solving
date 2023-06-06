const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line.trim()));
}).on("close", function () {
  const dp = Array(31)
    .fill()
    .map(() => Array(31).fill(0));
  for (let w = 0; w < 31; w++) {
    for (let h = 0; h < 31; h++) {
      if (h === 0) {
        dp[w][h] = 1;
      } else if (w > h) {
        dp[w][h] = dp[w - 1][h] + dp[w][h - 1];
      } else if (w === h) {
        dp[w][h] = dp[w][h - 1];
      }
    }
  }
  input.pop();
  for (let i = 0; i < input.length; i++) {
    console.log(dp[input[i]][input[i]]);
  }
  process.exit();
});
