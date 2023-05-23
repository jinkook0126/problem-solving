/*
https://www.acmicpc.net/problem/20300
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
  let n = parseInt(input.shift());
  const arr = input
    .shift()
    .split(" ")
    .map((x) => BigInt(x));
  arr.sort((a, b) => {
    if (a > b) {
      return 1;
    } else {
      return -1;
    }
  });
  let ans = 0n;
  if (n % 2 !== 0) {
    ans = arr.pop();
    n -= 1;
  }
  for (let i = 0; i < n / 2; i++) {
    const tmp = arr[i] + arr[n - 1 - i];
    if (tmp > ans) ans = tmp;
  }
  console.log(String(ans));
  process.exit();
});
