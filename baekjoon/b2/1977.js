/*
https://www.acmicpc.net/problem/1977
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
  const M = input.shift();
  const N = input.shift();
  const res = [];
  for (let i = 1; i <= Math.sqrt(Math.max(M, N)); i++) {
    const num = Math.pow(i, 2);
    if (num >= M && num <= N) {
      res.push(num);
    }
  }
  if (res.length === 0) {
    console.log(-1);
  } else {
    console.log(
      `${res.reduce((prev, curr) => prev + curr, 0)}\n${Math.min(...res)}`
    );
  }
  process.exit();
});
