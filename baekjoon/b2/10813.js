/*
https://www.acmicpc.net/problem/10813
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
    map.set(i, i);
  }
  for (const s of input) {
    const [i, j] = s.split(" ").map((x) => +x);
    const tmp = map.get(i);
    map.set(i, map.get(j));
    map.set(j, tmp);
  }
  for (const [k, v] of map) {
    res.push(v);
  }
  console.log(res.join(" "));
  process.exit();
});
