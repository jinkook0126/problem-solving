const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(
    line
      .trim()
      .split(" ")
      .map((x) => +x)
  );
}).on("close", function () {
  const [n, k] = input.shift();
  const dp = Array(n + 1)
    .fill()
    .map(() => []);
  dp[1] = ["1"];
  dp[2] = ["1+1", "2"];
  dp[3] = ["1+1+1", "1+2", "2+1", "3"];
  for (let i = 4; i <= n; i++) {
    for (let j = 1; j <= 3; j++) {
      dp[i - j].forEach((x) => {
        dp[i].push(`${x}+${j}`);
      });
    }
  }
  console.log(dp[n].sort((a, b) => a.localeCompare(b))[k - 1] || -1);
  process.exit();
});
