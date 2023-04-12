/*
https://www.acmicpc.net/problem/5597
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
  const res = [];
  const set = new Set();
  input.forEach((x) => {
    set.add(+x);
  });
  for (let i = 1; i <= 30; i++) {
    if (!set.has(i)) res.push(i);
  }
  console.log(res.sort((a, b) => a - b).join("\n"));
  process.exit();
});
