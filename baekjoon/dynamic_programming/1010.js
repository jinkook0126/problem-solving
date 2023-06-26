const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const T = parseInt(input.shift());
  const ans = [];
  const dp = Array(31)
    .fill()
    .map((x) => Array(31).fill(0));
  for (let i = 1; i <= 30; i++) {
    for (let j = 1; j <= 30; j++) {
      if (i > j) {
        dp[i][j] = 0;
      } else if (i === j) {
        dp[i][j] = 1;
      } else if (i === 1 && j > i) {
        dp[i][j] = j;
      } else if (j > i) {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j - 1];
      }
    }
  }
  for (let i = 0; i < T; i++) {
    const [N, M] = input[i].split(" ").map((x) => +x);
    ans.push(dp[N][M]);
  }
  console.log(ans.join("\n"));
  process.exit();
});
