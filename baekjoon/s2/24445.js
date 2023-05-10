/*
https://www.acmicpc.net/problem/24445
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
  const queue = [R];
  visited[R] = ++cnt;
  while (queue.length) {
    const x = queue.shift();
    graph[x].sort((a, b) => b - a);
    for (let i = 0; i < graph[x].length; i++) {
      const c = graph[x][i];
      if (visited[c] === 0) {
        visited[c] = ++cnt;
        queue.push(c);
      }
    }
  }
  visited.shift();
  console.log(visited.join("\n"));
  process.exit();
});
