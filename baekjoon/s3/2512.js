/*
https://www.acmicpc.net/problem/2512
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
  const arr = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const M = parseInt(input.shift());
  let lt = 0;
  let rt = Math.max(...arr);
  let max = -1;
  while (lt <= rt) {
    const mid = Math.ceil((lt + rt) / 2);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > mid) {
        sum += mid;
      } else if (arr[i] <= mid) {
        sum += arr[i];
      }
    }
    if (sum < M) {
      lt = mid + 1;
      max = Math.max(max, mid);
    } else if (sum > M) {
      rt = mid - 1;
    } else {
      max = Math.max(max, mid);
      break;
    }
  }
  console.log(max);
  process.exit();
});
