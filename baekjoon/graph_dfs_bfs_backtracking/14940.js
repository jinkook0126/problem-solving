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
  const [n, m] = input.shift();
  const board = input;
  const visit = Array(n)
    .fill()
    .map(() => Array(m).fill(false));
  const BFS = (x, y) => {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const queue = [[x, y, 1]];
    while (queue.length) {
      const [cx, cy, cn] = queue.shift();
      for (let i = 0; i < dx.length; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < m &&
          board[nx][ny] === 1 &&
          visit[nx][ny] === false
        ) {
          board[nx][ny] = cn;
          visit[nx][ny] = true;
          queue.push([nx, ny, cn + 1]);
        }
      }
    }
  };
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] === 2 && visit[i][j] === false) {
        board[i][j] = 0;
        visit[i][j] = true;
        BFS(i, j);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!visit[i][j] && board[i][j] === 1) {
        board[i][j] = -1;
      }
    }
  }
  console.log(board.map((row) => row.join(" ")).join("\n"));
  process.exit();
});
// 5 5
// 2 1 1 1 1
// 1 1 1 1 1
// 1 1 1 1 1
// 1 1 1 1 1
// 1 1 1 1 1

// 5 5
// 2 1 1 1 1
// 1 1 1 1 1
// 1 1 0 0 1
// 1 1 0 1 1
// 1 1 0 1 1

// 5 5
// 2 1 1 1 1
// 1 1 1 1 1
// 1 1 0 0 0
// 1 1 0 1 1
// 1 1 0 1 1
