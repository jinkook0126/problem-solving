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
  arr.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 1; i < arr.length; i++) {
    sum += arr[i - 1] * arr[i];
    arr[i] = arr[i - 1] + arr[i];
  }
  console.log(sum);
  process.exit();
});
