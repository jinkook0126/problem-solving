/*
https://www.acmicpc.net/problem/2644
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
  const [from, to] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const m = parseInt(input.shift());
  const visited = Array(N + 1).fill(0);
  const answer = Array(N + 1).fill(0);
  const queue = [from];
  visited[from] = 1;
  const graph = Array(N + 1)
    .fill()
    .map((x) => []);
  input
    .map((x) => x.split(" ").map((x) => +x))
    .forEach((line) => {
      const [x, y] = line;
      graph[x].push(y);
      graph[y].push(x);
    });

  while (queue.length) {
    const x = queue.shift();
    if (x === to) break;
    for (let i = 0; i < graph[x].length; i++) {
      const c = graph[x][i];
      if (visited[c] === 0) {
        visited[c] = 1;
        answer[c] = answer[x] + 1;
        queue.push(c);
      }
    }
  }
  console.log(answer[to] === 0 ? -1 : answer[to]);
  process.exit();
});
