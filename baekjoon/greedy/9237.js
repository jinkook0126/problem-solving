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
  let days = 0;
  arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length; i++) {
    days = Math.max(days, arr[i] + i + 1);
  }
  console.log(days + 1);
  process.exit();
});
