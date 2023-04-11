/*
https://www.acmicpc.net/problem/2743
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
  console.log(input[0].length);
  process.exit();
});
