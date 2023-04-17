/*
https://www.acmicpc.net/problem/5622
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
  const arr = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
  let sum = 0;
  for (const c of str) {
    arr.forEach((a, i) => {
      if (a.indexOf(c) !== -1) {
        sum += i + 3;
      }
    });
  }
  console.log(sum);
  process.exit();
});
