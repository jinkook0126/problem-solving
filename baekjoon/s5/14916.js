/*
https://www.acmicpc.net/problem/14916
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
  let n = input.pop();
  const out = [1, 3];
  if (out.includes(n)) {
    console.log(-1);
    return;
  }
  let cnt = 0;
  while (1) {
    if (n % 5 === 0) {
      cnt += n / 5;
      break;
    }
    n -= 2;
    cnt += 1;
  }
  console.log(cnt);
  process.exit();
});
