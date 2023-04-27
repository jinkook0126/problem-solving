/*
https://www.acmicpc.net/problem/2167
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
  const arr = [];
  const accArr = [];
  const ans = [];
  for (let i = 0; i < N; i++) {
    arr.push(input[i].split(" ").map((x) => +x));
  }
  for (let i = N + 1; i < input.length; i++) {
    accArr.push(input[i].split(" ").map((x) => +x));
  }

  for (let k = 0; k < accArr.length; k++) {
    const [i, j, x, y] = accArr[k];
    let sum = 0;
    for (let ii = i - 1; ii < x; ii++) {
      for (let jj = j - 1; jj < y; jj++) {
        sum += arr[ii][jj];
      }
    }
    ans.push(sum);
  }
  console.log(ans.join("\n"));
  process.exit();
});
// 2 3
// 1 2 4
// 8 16 32
// 3
// 1 1 2 3
// 1 2 1 2
// 1 3 2 3
