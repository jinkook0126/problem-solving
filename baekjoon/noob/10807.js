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
  const N = input.shift();
  const arr = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const v = parseInt(input.shift());
  const hash = new Map();
  arr.forEach((x) => {
    hash.set(x, hash.get(x) + 1 || 1);
  });
  console.log(hash.get(v) || 0);
  process.exit();
});
