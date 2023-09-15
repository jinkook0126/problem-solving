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
  const ans = Array(N).fill(0);
  const board = input.map((x) => x.split(" ").map((k) => +k));
  for (let i = 0; i < 3; i++) {
    const map = new Map();
    const arr = [];
    for (let j = 0; j < N; j++) {
      arr.push(board[j][i]);
      map.set(board[j][i], map.get(board[j][i]) + 1 || 1);
    }
    arr.forEach((x, k) => {
      if (map.get(x) === 1) {
        ans[k] += x;
      }
    });
  }
  console.log(ans.join("\n"));
  process.exit();
});
