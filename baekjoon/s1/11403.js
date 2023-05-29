/*
https://www.acmicpc.net/problem/11403
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
  const N = parseInt(input.shift());
  const graph = input.map(
    (x) => x.split(" ").map((x) => (x === "0" ? Infinity : 1))
    // x.split(" ").map((x) => +x)
  );
  for (let k = 0; k < N; k++) {
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        // if (graph[i][k] && graph[k][j]) {
        //   graph[i][j] = 1;
        // }
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }
  console.log(
    graph
      .map((row) => row.map((x) => (x === Infinity ? 0 : 1)).join(" "))
      .join("\n")
  );

  process.exit();
});
