/*
https://www.acmicpc.net/problem/1931
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
  const arr = input.map((x) => x.split(" ").map((x) => +x));
  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });
  let et = 0;
  let cnt = 0;
  for (let x of arr) {
    if (x[0] >= et) {
      cnt += 1;
      et = x[1];
    }
  }

  console.log(cnt);
  process.exit();
});
