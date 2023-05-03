/*
https://www.acmicpc.net/problem/17845
 */
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
  const [N, K] = input[0];
  const dy = Array(K + 1)
    .fill()
    .map((x) => Array(N + 1).fill(0));
  for (let i = 1; i <= K; i++) {
    for (let j = 1; j <= N; j++) {
      const [I, T] = input[i];
      if (T > j) {
        dy[i][j] = dy[i - 1][j];
      } else {
        dy[i][j] = Math.max(dy[i - 1][j], dy[i - 1][j - T] + I);
      }
    }
  }
  console.log(dy[K][N]);
  process.exit();
});
