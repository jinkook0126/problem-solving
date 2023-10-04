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
  const board = input.map((x) => x.split(""));
  const visit = Array(N)
    .fill()
    .map(() => Array(M).fill(0));
  let cnt = 0;
  const BFS = (x, y) => {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const queue = [[x, y]];
    while (queue.length) {
      const [cx, cy] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];
        if (
          nx >= 0 &&
          nx < N &&
          ny >= 0 &&
          ny < M &&
          visit[nx][ny] === 0 &&
          board[nx][ny] !== "X"
        ) {
          if (board[nx][ny] === "P") cnt += 1;
          visit[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
  };
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === "I") {
        visit[i][j] = 1;
        BFS(i, j);
      }
    }
  }
  console.log(cnt || "TT");
  process.exit();
});
