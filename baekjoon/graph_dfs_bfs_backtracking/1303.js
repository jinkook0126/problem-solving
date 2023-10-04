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
  const visit = Array(M)
    .fill()
    .map(() => Array(N).fill(0));
  const ans = [0, 0];
  const BFS = (x, y, t) => {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let cnt = 1;
    const queue = [[x, y]];
    while (queue.length) {
      const [cx, cy] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];
        if (
          nx >= 0 &&
          nx < M &&
          ny >= 0 &&
          ny < N &&
          visit[nx][ny] === 0 &&
          board[nx][ny] === t
        ) {
          cnt += 1;
          visit[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
    return cnt;
  };
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (visit[i][j] === 0) {
        visit[i][j] = 1;
        const t = board[i][j];
        const v = BFS(i, j, t);
        if (t === "W") ans[0] += Math.pow(v, 2);
        else ans[1] += Math.pow(v, 2);
      }
    }
  }
  console.log(ans.join(" "));
  process.exit();
});

// 5 5
// WBWWW
// WWWWW
// BBBBB
// BBBWW
// WWWWW

// 130 65
