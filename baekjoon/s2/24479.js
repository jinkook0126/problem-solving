/*
https://www.acmicpc.net/problem/24479
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
  const [N, M, R] = input.shift();
  const ans = [];
  const graph = Array(N + 1)
    .fill()
    .map((x) => []);
  const visited = Array(N + 1).fill(0);
  let cnt = 0;
  input.forEach((line) => {
    const [a, b] = line;
    graph[a].push(b);
    graph[b].push(a);
  });
  graph.forEach((line) => {
    line.sort((a, b) => a - b);
  });
  const DFS = (V) => {
    visited[V] = ++cnt;
    ans.push(V);
    for (let i = 0; i < graph[V].length; i++) {
      const x = graph[V][i];
      if (visited[x] === 0) DFS(graph[V][i]);
    }
  };
  DFS(R);
  visited.shift();
  //   console.log(ans.join("\n"));
  console.log(visited.join("\n"));
  process.exit();
});
