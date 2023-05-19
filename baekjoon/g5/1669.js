/*
https://www.acmicpc.net/problem/1669
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
  const [X, Y] = input.shift();
  const n = Y - X;
  const sqrt = parseInt(Math.sqrt(n));
  const pow = Math.pow(sqrt, 2);
  let ans = 0;
  for (let i = 1; i < sqrt; i++) {
    ans += 1;
  }
  for (let i = sqrt; i >= 1; i--) {
    ans += 1;
  }
  if (n - pow === 0) {
    console.log(ans);
  } else if (n - pow <= sqrt) {
    console.log(ans + 1);
  } else {
    console.log(ans + 2);
  }
  process.exit();
});
