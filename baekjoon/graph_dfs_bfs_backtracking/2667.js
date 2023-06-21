/*
https://www.acmicpc.net/problem/2667
 */
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
  const board = input.map((x) => x.split("").map((x) => +x));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const tmp = [];
  let ch = 0;
  const DFS = (x, y, l) => {
    for (let i = 0; i < dx.length; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < N && ny >= 0 && ny < N && board[nx][ny] === 1) {
        board[nx][ny] = 0;
        tmp[ch] += 1;
        DFS(nx, ny, l);
      }
    }
  };
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (board[i][j] === 1) {
        board[i][j] = 0;
        tmp[ch] = 1;
        DFS(i, j, ch);
        ch += 1;
      }
    }
  }
  console.log(tmp.length);
  console.log(tmp.sort((a, b) => a - b).join("\n"));
  process.exit();
});
