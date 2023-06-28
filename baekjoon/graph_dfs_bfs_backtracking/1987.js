const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [R, C] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const board = input.map((row) => row.split(""));
  const map = new Map();
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (!map.has(board[i][j])) map.set(board[i][j], 0);
    }
  }
  let ans = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const visited = Array(R)
    .fill()
    .map(() => Array(C).fill(0));
  const DFS = (x, y, l) => {
    ans = Math.max(ans, l);

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 &&
        nx < R &&
        ny >= 0 &&
        ny < C &&
        visited[nx][ny] === 0 &&
        map.get(board[nx][ny]) === 0
      ) {
        visited[nx][ny] = 1;
        map.set(board[nx][ny], 1);
        DFS(nx, ny, l + 1);
        visited[nx][ny] = 0;
        map.set(board[nx][ny], 0);
      }
    }
  };
  visited[0][0] = 1;
  map.set(board[0][0], 1);
  DFS(0, 0, 1);
  console.log(ans);
  process.exit();
});
