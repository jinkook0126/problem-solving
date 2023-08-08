const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [M, N] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const board = input.map((x) => x.split(""));
  const ans = Array(5).fill(0);
  const findBlind = (x, y) => {
    let sum = 0;
    for (let i = x; i <= x + 3; i++) {
      if (board[i][y] === "*") sum += 1;
      for (let j = y; j <= y + 3; j++) {
        board[i][j] = "#";
      }
    }
    return sum;
  };
  for (let i = 1; i < M * 5 + 1; i++) {
    for (let j = 1; j < N * 5 + 1; j++) {
      if (board[i][j] !== "#") {
        const tmp = findBlind(i, j);
        ans[tmp] += 1;
      }
    }
  }
  console.log(ans.join(" "));
  process.exit();
});
