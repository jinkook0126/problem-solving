/*
https://www.acmicpc.net/problem/7562
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
  let pt = 0;
  const dx = [-2, -2, -1, 1, 2, 2, 1, -1];
  const dy = [-1, 1, 2, 2, 1, -1, -2, -2];
  const ans = [];
  for (let w = 0; w < N; w++) {
    const i = parseInt(input[pt]);
    const from = input[pt + 1].split(" ").map((x) => +x);
    const to = input[pt + 2].split(" ").map((x) => +x);
    const visited = Array(i)
      .fill()
      .map((x) => Array(i).fill(0));
    const tmp = Array(i)
      .fill()
      .map((x) => Array(i).fill(0));
    let min = Number.MAX_SAFE_INTEGER;
    const queue = [from];
    visited[from[0]][from[1]] = 1;
    tmp[from[0]][from[1]] = 0;
    while (queue.length) {
      const x = queue.shift();
      if (x[0] === to[0] && x[1] === to[1]) {
        min = Math.min(min, tmp[x[0]][x[1]]);
        break;
      }
      for (let j = 0; j < dx.length; j++) {
        const [cx, cy] = x;
        const nx = dx[j] + cx;
        const ny = dy[j] + cy;
        if (nx >= 0 && nx < i && ny >= 0 && ny < i && visited[nx][ny] === 0) {
          visited[nx][ny] = 1;
          tmp[nx][ny] = tmp[cx][cy] + 1;
          queue.push([nx, ny]);
        }
      }
    }
    ans.push(min);
    pt += 3;
  }
  console.log(ans.join("\n"));
  process.exit();
});
