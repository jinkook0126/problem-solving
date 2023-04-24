/*
https://www.acmicpc.net/problem/2309
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line.trim()));
}).on("close", function () {
  const tmp = [];
  let ans = [];
  const ch = Array(9).fill(0);
  let chk = false;
  const DFS = (L) => {
    if (chk) return;
    if (L === 7) {
      if (tmp.reduce((prev, curr) => prev + curr, 0) === 100) {
        chk = true;
        ans = tmp.slice().sort((a, b) => a - b);
      }
    } else {
      for (let i = 0; i < 9; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = input[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  };
  DFS(0);
  console.log(ans.join("\n"));
  process.exit();
});
