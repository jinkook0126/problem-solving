/*
S5
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
  const arr = input.map((x) => x.split(" ").map((x) => +x));
  const map = new Map();
  const ans = [];
  arr.sort((a, b) => b[2] - a[2]);
  for (let i = 0; i < arr.length; i++) {
    const [a, b, c] = arr[i];
    if (map.get(a) === undefined || map.get(a) < 2) {
      map.set(a, map.get(a) + 1 || 1);
      ans.push(`${a} ${b}`);
    }
    if (ans.length === 3) break;
  }
  console.log(ans.join("\n"));
  process.exit();
});
// 9
// 1 1 230
// 1 2 210
// 1 3 205
// 2 1 100
// 2 2 150
// 3 1 175
// 3 2 190
// 3 3 180
// 3 4 195
