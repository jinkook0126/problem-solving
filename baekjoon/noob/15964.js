/*
https://www.acmicpc.net/problem/15964
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
  const [A, B] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  console.log((A + B) * (A - B));
  process.exit();
});
