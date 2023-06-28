const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const n = parseInt(input.shift());
  const board = input.map((row) => row.split(" ").map((x) => +x));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const lookup = Array(n)
    .fill()
    .map(() => Array(n).fill(-1));
  const DFS = (x, y) => {
    if (lookup[x][y] !== -1) return lookup[x][y];
    lookup[x][y] = 0;
    const tmp = [0];
    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;
      if (
        nx >= 0 &&
        nx < n &&
        ny >= 0 &&
        ny < n &&
        board[nx][ny] > board[x][y]
      ) {
        tmp.push(DFS(nx, ny));
      }
    }
    lookup[x][y] = Math.max(...tmp) + 1;
    return lookup[x][y];
  };
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (lookup[i][j] === -1) {
        DFS(i, j);
      }
    }
  }
  console.log(Math.max(...lookup.flat(n)));
  process.exit();
});
