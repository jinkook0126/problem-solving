/*
https://www.acmicpc.net/problem/21921
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(
    line
      .trim()
      .split(" ")
      .map((x) => +x)
  );
}).on("close", function () {
  const [N, X] = input.shift();
  const arr = input.shift();
  let sum = 0;
  let cnt = 1;
  let lt = 0;
  for (let i = 0; i < X; i++) {
    sum += arr[i];
  }
  let max = sum;
  for (let i = X; i < arr.length; i++) {
    const newSum = sum + arr[i] - arr[lt];
    if (newSum > max) {
      cnt = 1;
    } else if (newSum === max) {
      cnt += 1;
    }
    max = Math.max(max, newSum);
    sum = newSum;
    lt += 1;
  }
  if (max === 0) {
    console.log("SAD");
  } else {
    console.log([max, cnt].join("\n"));
  }
  process.exit();
});
