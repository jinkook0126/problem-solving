/*
https://www.acmicpc.net/problem/12865
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
  const [N, K] = input.shift();
  const dy = Array(N + 1)
    .fill()
    .map((x) => Array(K + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= K; j++) {
      const [W, V] = input[i - 1];
      if (j < W) {
        dy[i][j] = dy[i - 1][j];
      } else {
        dy[i][j] = Math.max(dy[i - 1][j], dy[i - 1][j - W] + V);
      }
    }
  }
  console.log(dy[N][K]);
  process.exit();
});
