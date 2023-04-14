/*
https://www.acmicpc.net/problem/24723

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
  console.log(Math.pow(2, input[0]));
  process.exit();
});
