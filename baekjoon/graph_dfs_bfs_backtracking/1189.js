const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [R, C, K] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const board = input.map((x) => x.split(""));
  let ans = 0;
  const visit = Array(R + 1)
    .fill()
    .map(() => Array(C + 1).fill(0));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const DFS = (x, y, cnt) => {
    if (cnt > K) return;
    if (x === 0 && y === C - 1 && cnt === K) {
      ans += 1;
      return;
    } else {
      for (let i = 0; i < dx.length; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (
          nx >= 0 &&
          nx < R &&
          ny >= 0 &&
          ny < C &&
          visit[nx][ny] === 0 &&
          board[nx][ny] !== "T"
        ) {
          visit[nx][ny] = 1;
          DFS(nx, ny, cnt + 1);
          visit[nx][ny] = 0;
        }
      }
    }
  };
  visit[R - 1][0] = 1;
  DFS(R - 1, 0, 1);
  console.log(ans);
  process.exit();
});
// 3 4 6
// ....
// .T..
// ....

// 4
