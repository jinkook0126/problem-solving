/*
https://www.acmicpc.net/problem/18111
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
  const [n, m, b] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const board = input.map((x) => x.split(" ").map((x) => +x));
  const maps = board.flat(2);
  const maxHeight = Math.max(...maps);
  const minHeight = Math.min(...maps);
  const ans = [];
  for (let i = 256; i >= 0; i--) {
    let block = b;
    let time = 0;
    for (let j = 0; j < maps.length; j++) {
      const h = maps[j];
      if (h > i) {
        // 목표보다 내가 크다.
        block += h - i;
        time += (h - i) * 2;
      } else if (i > h) {
        // 목표보다 내가 작다.
        block -= i - h;
        time += (i - h) * 1;
      }
    }
    if (block >= 0) {
      ans.push([time, i]);
    }
  }
  console.log(ans.sort((a, b) => a[0] - b[0])[0].join(" "));
  process.exit();
});
