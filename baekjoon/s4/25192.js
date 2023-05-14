/*
https://www.acmicpc.net/problem/
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
  const set = new Set();
  let ans = 0;
  input.forEach((str) => {
    if (str === "ENTER") {
      ans += set.size;
      set.clear();
    } else {
      set.add(str);
    }
  });
  if (set.size !== 0) ans += set.size;
  console.log(ans);
  process.exit();
});
