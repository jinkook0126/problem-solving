/*
https://www.acmicpc.net/problem/15654
 */
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
  const [N, M] = input.shift();
  const arr = input.shift().sort((a, b) => a - b);
  const ans = [];
  const tmp = [];
  const ch = Array(N).fill(0);
  const DFS = (L) => {
    if (L === M) {
      ans.push(tmp.slice());
    } else {
      for (let i = 0; i < N; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  };
  DFS(0);
  console.log(ans.map((x) => x.join(" ")).join("\n"));
  process.exit();
});
