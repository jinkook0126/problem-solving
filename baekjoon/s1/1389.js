/*
https://www.acmicpc.net/problem/1389
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
  const [N, M] = input.shift();
  const graph = Array(N)
    .fill()
    .map(() => Array(N).fill(Infinity));
  for (let i = 0; i < N; i++) {
    graph[i][i] = 0;
  }
  for (const [a, b] of input) {
    graph[a - 1][b - 1] = 1;
    graph[b - 1][a - 1] = 1;
  }
  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        graph[i][j] = Math.min(graph[i][k] + graph[k][j], graph[i][j]);
      }
    }
  }
  const ans = graph.map((x, i) => {
    return [i, x.reduce((prev, curr) => prev + curr, 0)];
  });
  ans.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  console.log(ans[0][0] + 1);
  process.exit();
});
