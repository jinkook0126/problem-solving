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
  let T = input.shift();
  const max = Math.max(...input);
  const ans = [];
  const dp = Array(max + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;
  for (let i = 4; i <= max; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1_000_000_009;
  }
  for (let i = 0; i < input.length; i++) {
    ans.push(dp[input[i]]);
  }
  console.log(ans.join("\n"));
  process.exit();
});
// 각 테스트 케이스마다, n을 1, 2, 3의 합으로 나타내는 방법의 수를 1,000,000,009로 나눈 나머지를 출력한다.

// 3
// 4
// 7
// 10

// 7
// 44
// 274
