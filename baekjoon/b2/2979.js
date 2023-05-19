/*
https://www.acmicpc.net/problem/2979
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
  const [A, B, C] = input.shift();
  const arr = Array(101).fill(0);
  input.forEach((x) => {
    const [st, ed] = x;
    for (let i = st; i < ed; i++) {
      arr[i] += 1;
    }
  });
  let sum = 0;
  arr.forEach((x) => {
    if (x === 1) {
      sum += x * A;
    } else if (x === 2) {
      sum += x * B;
    } else {
      sum += x * C;
    }
  });
  console.log(sum);
  process.exit();
});
