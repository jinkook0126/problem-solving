/*
https://www.acmicpc.net/problem/9086
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
  const res = [];
  input.forEach((x) => {
    res.push(`${x[0]}${x.at(-1)}`);
  });
  console.log(res.join("\n"));
  process.exit();
});
