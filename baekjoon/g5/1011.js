/*
https://www.acmicpc.net/problem/1011
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
  const arr = input.map((x) => x.split(" ").map((x) => +x));
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    const [from, to] = arr[i];
    const diff = to - from;
    const n = Math.floor(Math.sqrt(diff));
    const range = Math.pow(n, 2);
    if (range === diff) {
      ans.push(n * 2 - 1);
    } else if (diff - range > n) {
      ans.push(n * 2 - 1 + 2);
    } else {
      ans.push(n * 2 - 1 + 1);
    }
  }
  console.log(ans.join("\n"));
  process.exit();
});
