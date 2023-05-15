/*
https://www.acmicpc.net/problem/1240
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
  const distance = Array(N + 1)
    .fill()
    .map(() => Array(N + 1).fill(0));
  for (let i = 0; i < N - 1; i++) {
    const [x, y, v] = input[i];
    graph[x].push(y);
    graph[y].push(x);
    distance[x][y] = v;
    distance[y][x] = v;
  }
  const ans = [];
  const BFS = (start, to) => {
    const visited = Array(N + 1).fill(0);
    const queue = [[start, 0]];
    while (queue.length) {
      const [x, sum] = queue.shift();
      if (x === to) {
        ans.push(sum);
        break;
      }
      for (let i = 0; i < graph[x].length; i++) {
        const c = graph[x][i];
        if (visited[c] === 0) {
          visited[c] = 1;
          queue.push([c, sum + distance[x][c]]);
        }
      }
    }
  };

  for (let i = N - 1; i < N - 1 + M; i++) {
    const [from, to] = input[i];
    BFS(from, to);
  }
  console.log(ans.join("\n"));
  process.exit();
});
