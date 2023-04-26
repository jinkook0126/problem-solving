/*
https://www.acmicpc.net/problem/1436
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
  let i = 665;
  let cnt = 0;
  while (1) {
    i += 1;
    if (String(i).includes("666")) {
      cnt += 1;
    }
    if (cnt === n) break;
  }
  console.log(i);
  process.exit();
});
