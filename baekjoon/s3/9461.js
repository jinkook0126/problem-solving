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
  const dp = Array(101).fill(0);
  const ans = [];
  dp[1] = 1;
  dp[2] = 1;
  dp[3] = 1;
  dp[4] = 2;
  dp[5] = 2;
  dp[6] = 3;
  dp[7] = 4;
  dp[8] = 5;
  dp[9] = 7;
  dp[10] = 9;
  for (let i = 11; i <= 100; i++) {
    dp[i] = dp[i - 3] + dp[i - 2];
  }
  for (let i = 0; i < N; i++) {
    ans.push(dp[input[i]]);
  }
  console.log(ans.join("\n"));
  process.exit();
});
