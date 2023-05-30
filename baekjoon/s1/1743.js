/*
https://www.acmicpc.net/problem/1743
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
  const [N, M, K] = input.shift();
  let ans = Number.MIN_SAFE_INTEGER;
  const graph = Array(N + 1)
    .fill()
    .map(() => Array(M + 1).fill(0));
  for (const [a, b] of input) {
    graph[a][b] = 1;
  }
  const DFS = (x, y, l) => {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let cnt = 1;
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx <= N && ny >= 0 && ny <= M && graph[nx][ny] === 1) {
        graph[nx][ny] = 0;
        cnt += DFS(nx, ny);
      }
    }
    return cnt;
  };
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      if (graph[i][j] === 1) {
        graph[i][j] = 0;
        let cnt = DFS(i, j);
        ans = Math.max(cnt, ans);
      }
    }
  }
  console.log(ans);
  process.exit();
});
