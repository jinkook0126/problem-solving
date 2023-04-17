/*
https://www.acmicpc.net/problem/10810
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
  const map = new Map();
  const res = [];
  for (let i = 1; i <= N; i++) {
    map.set(i, 0);
  }
  input.forEach((str) => {
    const [i, j, k] = str.split(" ").map((x) => +x);
    for (let z = i; z <= j; z++) {
      map.set(z, k);
    }
  });
  for (const [k, v] of map) {
    res.push(v);
  }
  console.log(res.join(" "));
  process.exit();
});
