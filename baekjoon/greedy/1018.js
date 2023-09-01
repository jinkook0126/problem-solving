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
  let ans = Number.MAX_SAFE_INTEGER;
  const dxdy = [];
  for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      dxdy.push([i, j]);
    }
  }
  for (let k = 0; k < dxdy.length; k++) {
    const [nx, ny] = dxdy[k];
    let row = 1;
    let black = 0;
    let white = 0;
    for (let i = 0 + nx; i < nx + 8; i++) {
      let col = 1;
      for (let j = 0 + ny; j < ny + 8; j++) {
        if (row % 2 !== 0) {
          if (col % 2 !== 0) {
            if (board[i][j] === "B") {
              white += 1;
            } else {
              black += 1;
            }
          } else {
            if (board[i][j] === "B") {
              black += 1;
            } else {
              white += 1;
            }
          }
        } else {
          if (col % 2 !== 0) {
            if (board[i][j] === "W") {
              white += 1;
            } else {
              black += 1;
            }
          } else {
            if (board[i][j] === "B") {
              white += 1;
            } else {
              black += 1;
            }
          }
        }
        col += 1;
      }
      row += 1;
    }
    ans = Math.min(ans, white, black);
  }
  console.log(ans);
  process.exit();
});
