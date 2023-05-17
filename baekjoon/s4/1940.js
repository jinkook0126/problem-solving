/*
https://www.acmicpc.net/problem/1940
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
  const M = parseInt(input.shift());
  let lt = 0;
  let rt = N - 1;
  let ans = 0;
  const arr = input
    .shift()
    .split(" ")
    .map((x) => +x);
  arr.sort((a, b) => a - b);
  while (lt < rt) {
    console.log(lt, rt);
    if (arr[lt] + arr[rt] < M) {
      lt += 1;
    } else if (arr[lt] + arr[rt] > M) {
      rt -= 1;
    } else {
      ans += 1;
      lt += 1;
    }
  }
  console.log(ans);
  process.exit();
});
