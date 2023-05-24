/*
https://www.acmicpc.net/problem/1138
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
  const n = parseInt(input.shift());
  const arr = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const ans = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const man = i + 1;
    const memo = arr[i];
    if (man === 1) {
      ans[memo] = man;
    } else {
      let cnt = 0;
      for (let j = 0; j < ans.length; j++) {
        if (cnt === memo) {
          ans[ans.slice(j, ans.length).indexOf(0) + j] = man;
          break;
        }
        if (ans[j] === 0 || ans[j] > man) {
          cnt += 1;
        }
      }
    }
  }
  console.log(ans.join(" "));
  process.exit();
});
