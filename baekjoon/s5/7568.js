/*
https://www.acmicpc.net/problem/7568
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
  for (let i = 0; i < input.length; i++) {
    const [x, y] = input[i].split(" ").map((x) => +x);
    let j = 0;
    let cnt = 1;
    while (j < input.length) {
      if (i !== j) {
        const [p, q] = input[j].split(" ").map((x) => +x);
        if (p > x && q > y) cnt += 1;
      }
      j += 1;
    }
    res.push(cnt);
  }
  console.log(res.join(" "));
  process.exit();
});
