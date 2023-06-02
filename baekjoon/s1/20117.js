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
  let sum = 0;
  arr.sort((a, b) => a - b);
  while (arr.length >= 2) {
    const a = arr.splice(0, 1);
    const b = arr.splice(arr.length - 1, 1);
    sum += b * 2;
  }
  if (arr.length) sum += arr[0];
  console.log(sum);
  process.exit();
});
