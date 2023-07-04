// S4
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
  let max = -1;
  input.sort((a, b) => a - b);
  for (let i = 0; i < input.length; i++) {
    max = Math.max(input[i] * (N - i), max);
  }
  console.log(max);
  process.exit();
});
