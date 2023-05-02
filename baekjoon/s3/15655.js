/*
https://www.acmicpc.net/problem/15655
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
  const ch = Array(N).fill(0);
  const tmp = [];
  const ans = [];
  const DFS = (L) => {
    if (L === M) {
      ans.push(tmp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 0) {
          if (L !== 0 && tmp[L - 1] > arr[i]) {
            continue;
          }
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
