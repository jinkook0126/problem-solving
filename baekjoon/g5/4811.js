const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line.trim()));
}).on("close", function () {
  input.pop();
  const ans = [];
  const dp = Array(31)
    .fill()
    .map(() => Array(31).fill(0));
  for (let w = 0; w < dp.length; w++) {
    for (let h = 0; h < dp.length; h++) {
      if (h > w) {
        continue;
      } else if (h === 0) {
        dp[w][h] = 1;
      } else {
        dp[w][h] = dp[w - 1][h] + dp[w][h - 1];
      }
    }
  }
  for (let i = 0; i < input.length; i++) {
    ans.push(dp[input[i]][input[i]]);
  }
  console.log(ans.join("\n"));
  process.exit();
});
