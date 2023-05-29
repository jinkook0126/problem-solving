/*
https://www.acmicpc.net/problem/11404
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const n = parseInt(input.shift());
  const m = parseInt(input.shift());
  const graph = Array(n)
    .fill()
    .map(() => Array(n).fill(Infinity));
  for (const [a, b, c] of input.map((x) => x.split(" ").map((x) => +x))) {
    const from = a - 1;
    const to = b - 1;
    if (graph[from][to] !== Infinity) {
      graph[from][to] = Math.min(graph[from][to], c);
    } else {
      graph[from][to] = c;
    }
  }
  for (let i = 0; i < n; i++) {
    graph[i][i] = 0;
  }
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        graph[i][j] = Math.min(graph[i][k] + graph[k][j], graph[i][j]);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (graph[i][j] === Infinity) {
        graph[i][j] = 0;
      }
    }
  }
  console.log(graph.map((x) => x.join(" ")).join("\n"));
  process.exit();
});
