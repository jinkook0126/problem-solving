/*
https://www.acmicpc.net/problem/2583
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
  const [M, N, K] = input.shift();
  const ans = [];
  const board = Array(N)
    .fill()
    .map(() => Array(M).fill(0));
  for (const [x1, y1, x2, y2] of input) {
    for (let i = x1; i < x2; i++) {
      for (let j = y1; j < y2; j++) {
        board[i][j] = 1;
      }
    }
  }
  const BFS = (x, y) => {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let cnt = 1;
    const queue = [];
    queue.push([x, y]);
    while (queue.length) {
      const [cx, cy] = queue.shift();
      for (let i = 0; i < dx.length; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];
        if (nx >= 0 && nx < N && ny >= 0 && ny < M && board[nx][ny] === 0) {
          cnt += 1;
          board[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
    return cnt;
  };
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 0) {
        board[i][j] = 1;
        ans.push(BFS(i, j));
      }
    }
  }
  console.log([ans.length, ans.sort((a, b) => a - b).join(" ")].join("\n"));
  process.exit();
});
