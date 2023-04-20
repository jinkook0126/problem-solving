/*
https://www.acmicpc.net/problem/2230
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
  const [N, M] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  let lt = 0;
  let rt = 0;
  let min = Number.MAX_SAFE_INTEGER;
  const arr = input.map((x) => +x).sort((a, b) => a - b);
  while (lt < arr.length && rt < arr.length) {
    if (lt === rt) rt += 1;
    else {
      const k = Math.abs(arr[rt] - arr[lt]);
      if (k >= M) {
        min = Math.min(min, k);
        lt += 1;
      } else {
        rt += 1;
      }
    }
  }
  console.log(min);
  process.exit();
});
