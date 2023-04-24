/*
https://www.acmicpc.net/problem/11399
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
  let N = parseInt(input.shift());
  const arr = input
    .shift()
    .split(" ")
    .map((x) => +x);
  arr.sort((a, b) => a - b);
  let sum = 0;
  const tmp = [];
  for (const x of arr) {
    tmp.push(x);
    sum += tmp.reduce((prev, acc) => prev + acc, 0);
  }
  console.log(sum);

  process.exit();
});
