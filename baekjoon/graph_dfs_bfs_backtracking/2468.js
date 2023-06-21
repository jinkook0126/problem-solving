/*
https://www.acmicpc.net/problem/2468
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
  const board = input.map((x) => x.split(" ").map((x) => +x));
  let visited = Array(N)
    .fill()
    .map(() => Array(N).fill(0));
  const max = Math.max(...board.flat(2));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let ans = 0;
  const DFS = (x, y, h) => {
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < N &&
        visited[nx][ny] === 0 &&
        board[nx][ny] > h
      ) {
        visited[nx][ny] = 1;
        DFS(nx, ny, h);
      }
    }
  };
  for (let k = 0; k <= max; k++) {
    let count = 0;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (board[i][j] > k && visited[i][j] === 0) {
          count += 1;
          visited[i][j] = 1;
          DFS(i, j, k);
        }
      }
    }
    ans = Math.max(count, ans);
    visited = Array(N)
      .fill()
      .map(() => Array(N).fill(0));
  }
  console.log(ans);
  process.exit();
});
