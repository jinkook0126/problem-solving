/*
https://www.acmicpc.net/problem/20365
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
  const arr = input.shift().split("");
  const map = new Map();
  map.set(arr[0], 1);
  for (let i = 1; i < N; i++) {
    if (arr[i] !== arr[i - 1]) {
      map.set(arr[i], map.get(arr[i]) + 1 || 1);
    }
  }
  console.log(Math.min(map.get("B") || 0, map.get("R") || 0) + 1);
  process.exit();
});

// 87에서 터짐
