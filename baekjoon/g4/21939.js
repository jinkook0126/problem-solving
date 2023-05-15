/*
https://www.acmicpc.net/problem/21939
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const N = parseInt(input[0]);
  const ans = [];
  const list = new Map();
  for (let i = 1; i <= N; i++) {
    const [a, b] = input[i].split(" ").map((x) => +x);
    list.set(a, b);
  }
  for (let i = N + 2; i < input.length; i++) {
    const [cmd, num, lv] = input[i].split(" ");
    if (cmd === "add") {
      list.set(parseInt(num), parseInt(lv));
    } else if (cmd === "solved") {
      list.delete(parseInt(num));
    } else {
      const tmp = [];
      for (const [q, l] of list) {
      }
    }
  }
  process.exit();
});
// 5
// 1000 1
// 1001 2
// 19998 78
// 2667 37
// 2042 55
// 8
// add 1402 59
// recommend 1
// solved 1000
// solved 19998
// recommend 1
// recommend -1
// solved 1001
// recommend -1
