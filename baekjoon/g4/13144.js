/*
https://www.acmicpc.net/problem/13144
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
  const n = parseInt(input.shift());
  const arr = input
    .shift()
    .split(" ")
    .map((x) => +x);

  const ch = Array(100001).fill(0);
  let lt = 0;
  let rt = 0;
  let ans = (n * (n + 1)) / 2;
  while (rt < n) {
    if (ch[arr[rt]] === 0) {
      ch[arr[rt]] += 1;
      rt++;
    } else {
      ch[arr[lt]] = 0;
      lt += 1;
      ans -= n - rt;
    }
  }
  console.log(ans);
  process.exit();
});
