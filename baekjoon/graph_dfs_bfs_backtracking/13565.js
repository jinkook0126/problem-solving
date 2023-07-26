const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [M, N] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const board = input.map((x) => x.split("").map((z) => +z));
  const visit = Array(M)
    .fill()
    .map(() => Array(N).fill(0));
  let flag = false;
  const DFS = (x, y) => {
    if (flag) {
      return;
    }
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 &&
        nx < M &&
        ny >= 0 &&
        ny < N &&
        visit[nx][ny] === 0 &&
        board[nx][ny] === 0
      ) {
        if (nx === M - 1) {
          flag = true;
        } else {
          visit[nx][ny] = 1;
          DFS(nx, ny);
        }
      }
    }
  };
  for (let i = 0; i < N; i++) {
    if (board[0][i] === 0 && visit[0][i] === 0) {
      visit[0][i] = 1;
      DFS(0, i);
    }
  }
  console.log(flag ? "YES" : "NO");
  process.exit();
});
