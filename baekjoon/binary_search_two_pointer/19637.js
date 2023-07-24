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
  const board = input.splice(0, N).map((x) => x.split(" "));
  const ans = [];
  for (let i = 0; i < M; i++) {
    const num = parseInt(input[i]);
    let left = 0;
    let right = board.length - 1;
    while (left <= right) {
      const mid = parseInt((left + right) / 2);
      if (parseInt(board[mid][1]) >= num) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    ans.push(board[left][0]);
  }
  console.log(ans.join("\n"));
  process.exit();
});
// 3 8
// WEAK 10000
// NORMAL 100000
// STRONG 1000000
// 0
// 9999
// 10000
// 10001
// 50000
// 100000
// 500000
// 1000000
