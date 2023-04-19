/*
https://www.acmicpc.net/problem/5568
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
  const n = input.shift();
  const k = input.shift();
  const ch = Array(input.length).fill(0);
  const set = new Set();
  let tmp = [];
  const DFS = (L) => {
    if (L === k) {
      set.add(tmp.slice().join(""));
    } else {
      for (let i = 0; i < input.length; i++) {
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
  console.log(set.size);
  process.exit();
});
