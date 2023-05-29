/*
https://www.acmicpc.net/problem/2018
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
  const N = input.shift();
  let lt = 1;
  let rt = 1;
  let ans = 0;
  let sum = 1;
  while (lt <= rt && rt <= N) {
    if (sum < N) {
      rt += 1;
      sum += rt;
    } else if (sum > N) {
      sum -= lt;
      lt += 1;
    } else {
      rt += 1;
      sum += rt;
      ans += 1;
    }
  }
  console.log(ans);
  process.exit();
});
