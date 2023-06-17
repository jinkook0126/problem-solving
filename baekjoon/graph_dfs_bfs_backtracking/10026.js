// G5
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const N = parseInt(input.shift());
  let a = 0;
  let b = 0;
  const arr = input.map((x) => x.split(""));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const DFS = (x, y, s, t) => {
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < N && ny >= 0 && ny < N && arr[nx][ny] === s) {
        arr[nx][ny] = t;
        DFS(nx, ny, s, t);
      }
    }
  };
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === "R") {
        arr[i][j] = "C";
        a += 1;
        DFS(i, j, "R", "C");
      }
      if (arr[i][j] === "G") {
        arr[i][j] = "C";
        a += 1;
        DFS(i, j, "G", "C");
      }
      if (arr[i][j] === "B") {
        arr[i][j] = "O";
        a += 1;
        b += 1;
        DFS(i, j, "B", "O");
      }
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[i][j] === "C") {
        arr[i][j] = "O";
        b += 1;
        DFS(i, j, "C", "O");
      }
    }
  }
  console.log([a, b].join(" "));
  process.exit();
});
