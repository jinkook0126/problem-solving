/*
https://www.acmicpc.net/problem/11508
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
  const N = parseInt(input.shift());
  input.sort((a, b) => b - a);
  let ans = 0;
  while (input.length !== 0) {
    const tmp = input.splice(0, 3);
    if (tmp.length === 3) {
      ans += tmp.reduce((prev, curr) => prev + curr, 0) - Math.min(...tmp);
    } else {
      ans += tmp.reduce((prev, curr) => prev + curr, 0);
    }
  }
  console.log(ans);
  process.exit();
});
