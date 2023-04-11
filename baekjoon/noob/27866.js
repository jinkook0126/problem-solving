/*
https://www.acmicpc.net/problem/27866
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
  const str = input[0];
  const k = parseInt(input[1]);
  console.log(str[k - 1]);
  process.exit();
});
