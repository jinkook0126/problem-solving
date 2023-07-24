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
  const [A, B] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const dow = parseInt(input.shift());
  const arr = input.map((x) => +x);
  arr.sort((a, b) => b - a); // 내림차순
  let sum = dow;
  let ans = parseInt(dow / A);
  for (let i = 0; i < N; i++) {
    sum += arr[i];
    ans = Math.max(parseInt(sum / (A + B * (i + 1))), ans);
  }
  console.log(ans);
  process.exit();
});
