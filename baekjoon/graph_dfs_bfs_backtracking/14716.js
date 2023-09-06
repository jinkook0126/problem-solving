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
  const [M, N] = input.shift();
  const visit = Array(M)
    .fill()
    .map(() => Array(N).fill(0));
  let ans = 0;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];
  const DFS = (x, y) => {
    input[x][y] = 0;
    visit[x][y] = 1;
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 &&
        nx < M &&
        ny >= 0 &&
        ny < N &&
        visit[nx][ny] === 0 &&
        input[nx][ny]
      )
        DFS(nx, ny);
    }
  };
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (input[i][j] === 1) {
        ans += 1;
        DFS(i, j);
      }
    }
  }
  console.log(ans);
  process.exit();
});
// 8 19
// 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
// 0 0 0 1 0 0 0 1 0 0 0 1 0 1 1 1 1 1 0
// 0 0 1 0 1 0 0 1 1 0 0 1 0 0 0 1 0 0 0
// 0 1 0 0 0 1 0 1 0 1 0 1 0 0 0 1 0 0 0
// 0 1 1 1 1 1 0 1 0 1 0 1 0 0 0 1 0 0 0
// 0 1 0 0 0 1 0 1 0 0 1 1 0 0 0 1 0 0 0
// 0 1 0 0 0 1 0 1 0 0 0 1 0 0 0 1 0 0 0
// 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
