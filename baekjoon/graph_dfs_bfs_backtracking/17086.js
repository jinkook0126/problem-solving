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
  const board = input.map((row) => row.map((x) => (x === 1 ? "a" : 0)));

  const BFS = (x, y) => {
    const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
    const dy = [0, 1, 1, 1, 0, -1, -1, -1];
    const queue = [[x, y, 0]];
    const visited = Array(N)
      .fill()
      .map(() => Array(M).fill(0));
    visited[x][y] = 1;
    while (queue.length) {
      const [cx, cy, dis] = queue.shift();
      for (let i = 0; i < dx.length; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];
        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < M &&
          board[nx][ny] !== "a" &&
          visited[nx][ny] === 0
        ) {
          visited[nx][ny] = 1;
          queue.push([nx, ny, dis + 1]);
          if (board[nx][ny] === 0) {
            board[nx][ny] = dis + 1;
          } else {
            board[nx][ny] = Math.min(board[nx][ny], dis + 1);
          }
        }
      }
    }
  };
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === "a") {
        BFS(i, j);
      }
    }
  }
  let ans = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] !== "a") {
        ans = Math.max(ans, board[i][j]);
      }
    }
  }
  console.log(ans);
  process.exit();
});
