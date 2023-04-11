/*
https://www.acmicpc.net/problem/2744
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
  let s = "";
  for (let c of input[0]) {
    if (c === c.toUpperCase()) {
      s += c.toLowerCase();
    } else {
      s += c.toUpperCase();
    }
  }
  console.log(s);
  process.exit();
});
