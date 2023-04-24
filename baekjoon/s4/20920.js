/*
https://www.acmicpc.net/problem/20920
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
  input.forEach((str) => {
    if (str.length >= M) {
      map.set(str, map.get(str) + 1 || 1);
    }
  });
  const arr = Array.from(map);
  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[0].length === b[0].length) {
        return a[0].localeCompare(b[0]);
      } else {
        return b[0].length - a[0].length;
      }
    } else {
      return b[1] - a[1];
    }
  });
  console.log(arr.map((c) => c[0]).join("\n"));
  process.exit();
});
