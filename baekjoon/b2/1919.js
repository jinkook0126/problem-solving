/*
https://www.acmicpc.net/problem/1919
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
  const str1 = input[0];
  const str2 = input[1];
  const map = new Map();
  let cnt = 0;
  for (let c of str1) {
    map.set(c, map.get(c) + 1 || 1);
  }
  for (let c of str2) {
    if (map.has(c)) {
      const n = map.get(c);
      if (n === 1) {
        map.delete(c);
      } else {
        map.set(c, map.get(c) - 1);
      }
    } else {
      cnt += 1;
    }
  }
  for (const [k, v] of map) {
    cnt += v;
  }
  console.log(cnt);
  process.exit();
});
