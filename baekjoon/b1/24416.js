/*
https://www.acmicpc.net/problem/24416
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line.trim()));
}).on("close", function () {
  const N = input.pop();
  let rec = 0;
  let dp = 0;
  const fib = (n) => {
    if (n === 1 || n === 2) {
      rec += 1;
      return 1;
    } else {
      return fib(n - 1) + fib(n - 2);
    }
  };
  const fibonacci = (n) => {
    const f = [];
    f[1] = 1;
    f[2] = 1;
    for (let i = 3; i <= n; i++) {
      f[i] = f[i - 1] + f[i - 2];
      dp += 1;
    }
    return f[n];
  };
  fib(N);
  fibonacci(N);
  console.log(`${rec} ${dp}`);
  process.exit();
});
