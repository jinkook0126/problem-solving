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
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === "#") continue;
      if (board[i][j] === "-") {
        cnt += 1;
        let c = 0;
        while (j + c < M && board[i][j + c] === "-") {
          board[i][j + c] = "#";
          c++;
        }
      } else {
        cnt += 1;
        let c = 0;
        while (i + c < N && board[i + c][j] === "|") {
          board[i + c][j] = "#";
          c++;
        }
      }
    }
  }
  console.log(cnt);
  process.exit();
});
