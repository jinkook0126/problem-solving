/*
https://www.acmicpc.net/problem/2178
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
  const graph = input.map((line) => line.split("").map((x) => +x));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let min = Number.MAX_SAFE_INTEGER;
  const queue = [[0, 0, 1]];
  graph[0][0] = 0;
  while (queue.length) {
    const x = queue.shift();
    if (x[0] === N - 1 && x[1] === M - 1) {
      min = Math.min(x[2], min);
      break;
    }
    for (let i = 0; i < 4; i++) {
      const [a, b, c] = x;
      const nx = dx[i] + a;
      const ny = dy[i] + b;
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && graph[nx][ny] === 1) {
        graph[nx][ny] = 0;
        queue.push([nx, ny, c + 1]);
      }
    }
  }
  console.log(min);
  process.exit();
});
