const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line.trim()));
}).on("close", function () {
  input.shift();
  const ans = [];
  const dp = Array(10001)
    .fill()
    .map((x) => Array(4).fill(0));

  dp[1][1] = 1;
  dp[1][2] = 0;
  dp[1][3] = 0;
  dp[2][1] = 1;
  dp[2][2] = 1;
  dp[2][3] = 0;
  dp[3][1] = 1;
  dp[3][2] = 1;
  dp[3][3] = 1;

  for (let i = 4; i < dp.length; i++) {
    dp[i][1] = dp[i - 1][1];
    dp[i][2] = dp[i - 2][1] + dp[i - 2][2];
    dp[i][3] = dp[i - 3][1] + dp[i - 3][2] + dp[i - 3][3];
  }

  for (let i = 0; i < input.length; i++) {
    ans.push(dp[input[i]].reduce((acc, prev) => acc + prev, 0));
  }
  console.log(ans.join("\n"));
  process.exit();
});
