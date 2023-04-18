/*
https://www.acmicpc.net/problem/10953
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
  input.shift();
  input.forEach((s) => {
    const [a, b] = s.split(",").map((x) => +x);
    console.log(a + b);
  });
  process.exit();
});
