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
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const lookup = Array(M)
    .fill()
    .map(() => Array(N).fill(-1));
  const DFS = (x, y) => {
    if (x === M - 1 && y === N - 1) return 1;
    if (lookup[x][y] !== -1) return lookup[x][y];
    lookup[x][y] = 0;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx >= 0 &&
        nx < M &&
        ny >= 0 &&
        ny < N &&
        input[x][y] > input[nx][ny]
      ) {
        lookup[x][y] = lookup[x][y] + DFS(nx, ny);
      }
    }
    return lookup[x][y];
  };

  DFS(0, 0);
  console.log(lookup[0][0]);
  process.exit();
});
