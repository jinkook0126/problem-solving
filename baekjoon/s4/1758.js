/*
https://www.acmicpc.net/problem/1758
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
  const N = input.shift();
  input.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 1; i <= input.length; i++) {
    const tip = input[i - 1] - (i - 1);
    if (tip > 0) sum += tip;
  }
  console.log(sum);
  process.exit();
});
