/*
부분집합 구하기( DFS )
3
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
  const N = input.shift();
  const ans = [];
  const ch = Array(N + 1);
  const DFS = (L) => {
    if (L === 3) {
      const tmp = [];
      for (let i = 1; i <= ch.length; i++) {
        if (ch[i] === 1) {
          tmp.push(i);
        }
      }
      ans.push(tmp.slice());
    } else {
      ch[L] = 1;
      DFS(L + 1);
      ch[L] = 0;
      DFS(L + 1);
    }
  };
  DFS(1);
  console.log(ans);
  process.exit();
});
