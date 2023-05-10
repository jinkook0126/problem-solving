/*
https://www.acmicpc.net/problem/2606
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
  const M = input.shift();
  const arr = input.map((x) => x.split(" ").map((x) => +x));
  let ans = 0;
  const graph = Array(N + 1)
    .fill()
    .map((x) => []);
  const visited = Array(N + 1).fill(0);
  for (const [a, b] of arr) {
    graph[a].push(b);
    graph[b].push(a);
  }
  visited[1] = 1;
  const queue = [1];
  while (queue.length) {
    const x = queue.shift();
    for (let i = 0; i < graph[x].length; i++) {
      const c = graph[x][i];
      if (visited[c] === 0) {
        visited[c] = 1;
        queue.push(c);
        ans += 1;
      }
    }
  }
  console.log(ans);
  process.exit();
});
