/*
https://www.acmicpc.net/problem/2828
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
  const [N, M] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const j = parseInt(input.shift());
  let ans = 0;
  let bar = Array(M)
    .fill(0)
    .map((_, i) => i + 1);
  if (bar.length === 1) bar.push(1);
  input
    .map((x) => +x)
    .forEach((x) => {
      if (!bar.includes(x)) {
        const from = bar[0];
        const to = bar.at(-1);
        if (from > x) {
          const diff = from - x;
          ans += diff;
          bar = bar.map((n) => n - diff);
        } else {
          const diff = x - to;
          ans += diff;
          bar = bar.map((n) => n + diff);
        }
      }
    });
  console.log(ans);
  process.exit();
});
