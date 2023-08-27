const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line.trim()));
}).on("close", function () {
  const T = input.shift();
  const max = Math.max(...input);
  const ans = [];
  const dp = Array(max + 1)
    .fill()
    .map(() => [0, 0, 0, 0]);
  dp[1][1] = 1;
  dp[2][2] = 1;
  dp[3][1] = 1;
  dp[3][2] = 1;
  dp[3][3] = 1;
  for (let i = 4; i <= max; i++) {
    dp[i][1] = (dp[i - 1][2] + dp[i - 1][3]) % 1_000_000_009;
    dp[i][2] = (dp[i - 2][1] + dp[i - 2][3]) % 1_000_000_009;
    dp[i][3] = (dp[i - 3][1] + dp[i - 3][2]) % 1_000_000_009;
  }
  for (let i = 0; i < input.length; i++) {
    const tmp =
      (dp[input[i]][1] + dp[input[i]][2] + dp[input[i]][3]) % 1_000_000_009;
    ans.push(tmp);
  }
  console.log(ans.join("\n"));
  process.exit();
});
