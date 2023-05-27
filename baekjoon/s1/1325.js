/*
https://www.acmicpc.net/problem/1325
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
  const graph = Array(N + 1)
    .fill()
    .map(() => []);
  input.sort((a, b) => a[1] - b[1]);
  for (const [a, b] of input) {
    graph[b].push(a);
  }
  const BFS = (L) => {
    const queue = [];
    queue.push(L);
    let cnt = 0;
    const visited = Array(N + 1).fill(0);
    visited[L] = 1;
    while (queue.length) {
      const x = queue.shift();
      cnt++;
      for (let j = 0; j < graph[x].length; j++) {
        if (visited[graph[x][j]] === 0) {
          queue.push(graph[x][j]);
          visited[graph[x][j]] = 1;
        }
      }
    }
    return cnt;
  };
  const ans = [];
  let max = 0;
  for (let i = 0; i < graph.length; i++) {
    let cnt = BFS(i);
    max = Math.max(cnt, max);
    ans.push([i, cnt]);
  }
  console.log(
    ans
      .filter((x) => x[1] === max)
      .map((x) => x[0])
      .join(" ")
  );
  process.exit();
});
