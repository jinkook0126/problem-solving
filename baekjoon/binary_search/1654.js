/*
S2
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
  const [N, K] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const arr = input.map((x) => +x);
  let start = 0;
  let end = Math.max(...arr);
  let ans = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += parseInt(arr[i] / mid);
    }
    if (sum < K) {
      end = mid - 1;
    } else {
      ans = Math.max(ans, mid);
      start = mid + 1;
    }
  }
  console.log(ans);
  process.exit();
});
