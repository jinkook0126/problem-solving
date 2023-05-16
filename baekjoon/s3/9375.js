/*
https://www.acmicpc.net/problem/1021
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
  const t = parseInt(input.shift());
  let p = 0;
  const ans = [];
  for (let i = 0; i < t; i++) {
    const t = parseInt(input[p]);
    const map = new Map();
    for (let j = p + 1; j < t + p + 1; j++) {
      const [tp, nm] = input[j].split(" ");
      map.set(nm, map.get(nm) + 1 || 1);
    }
    let sum = 1;
    for (const [k, v] of map) {
      sum *= v + 1;
    }
    ans.push(sum - 1);
    p += t + 1;
  }
  console.log(ans.join("\n"));
  process.exit();
});
