/*
https://www.acmicpc.net/problem/16165
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
  let [N, M] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const map = new Map();
  const ans = [];
  while (N > 0) {
    const [name, per] = input.splice(0, 2);
    map.set(name, input.splice(0, parseInt(per)));
    N -= 1;
  }
  console.log(map);
  while (M > 0) {
    const [name, type] = input.splice(0, 2);
    if (type === "0") {
      const groups = map.get(name);
      ans.push(...groups.sort((a, b) => a.localeCompare(b)));
    } else {
      for (const [k, v] of map) {
        if (v.includes(name)) {
          ans.push(k);
          break;
        }
      }
    }
    M -= 1;
  }
  console.log(ans.join("\n"));
  process.exit();
});
