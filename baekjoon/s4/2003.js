/*
https://www.acmicpc.net/problem/2309
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
  const arr = input
    .shift()
    .split(" ")
    .map((x) => +x);
  let lt = 0;
  let rt = 0;
  let cnt = 0;
  while (lt < arr.length && rt < arr.length) {
    let sum = 0;
    for (let i = lt; i <= rt; i++) {
      sum += arr[i];
    }
    if (sum === M) {
      cnt += 1;
      rt += 1;
    } else if (sum < M) {
      rt += 1;
    } else if (sum > M) {
      lt += 1;
    }
  }
  console.log(cnt);
  process.exit();
});
