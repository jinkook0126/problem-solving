/*
https://www.acmicpc.net/problem/11724
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
  const [N, M] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const graph = Array(N + 1)
    .fill()
    .map(() => []);
  const visited = Array(N + 1).fill(0);
  for (const [a, b] of input.map((x) => x.split(" ").map((x) => +x))) {
    graph[a].push(b);
    graph[b].push(a);
  }
  const DFS = (l) => {
    for (let i = 0; i < graph[l].length; i++) {
      const c = graph[l][i];
      if (visited[c] === 0) {
        visited[c] = 1;
        DFS(c);
      }
    }
  };
  let ans = 0;
  for (let i = 1; i <= N; i++) {
    if (visited[i] === 0) {
      ans += 1;
      visited[i] = 1;
      DFS(i);
    }
  }
  console.log(ans);
  process.exit();
});
