/*
https://www.acmicpc.net/problem/20115
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
  const n = parseInt(input.shift());
  const arr = input
    .shift()
    .split(" ")
    .map((x, i) => Number(x));
  arr.sort((a, b) => b - a);
  let sum = 0;
  arr.forEach((x, i) => {
    if (i === 0) sum = x;
    else {
      sum += x / 2;
    }
  });
  console.log(sum);
  process.exit();
});
