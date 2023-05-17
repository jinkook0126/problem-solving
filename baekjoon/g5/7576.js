/*
https://www.acmicpc.net/problem/7576
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
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const queue = [];
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (input[i][j] === 1) {
        queue.push([i, j, 1]);
      }
    }
  }
  while (queue.length) {
    const [px, py, ps] = queue.shift();
    for (let i = 0; i < dx.length; i++) {
      const nx = px + dx[i];
      const ny = py + dy[i];
      if (nx >= 0 && nx < M && ny >= 0 && ny < N && input[nx][ny] === 0) {
        input[nx][ny] += ps;
        queue.push([nx, ny, ps + 1]);
      }
    }
  }
  let ans = Number.MIN_SAFE_INTEGER;
  let chk = false;
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      ans = Math.max(ans, input[i][j]);
      if (input[i][j] === 0) {
        chk = true;
        break;
      }
    }
  }
  console.log(chk ? -1 : ans);
  process.exit();
});
