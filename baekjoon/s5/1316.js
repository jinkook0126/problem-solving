/*
https://www.acmicpc.net/problem/1316
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
  const N = parseInt(input.shift());
  let cnt = 0;
  for (const str of input) {
    const arr = [];
    const set = new Set();
    for (const c of str) {
      if (arr.at(-1) !== c) {
        arr.push(c);
      }
    }
    for (const c of arr) {
      if (!set.has(c)) set.add(c);
    }
    if (arr.length === set.size) cnt += 1;
  }
  console.log(cnt);
  process.exit();
});
