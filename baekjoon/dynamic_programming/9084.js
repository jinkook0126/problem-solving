// S2
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const T = parseInt(input.shift());
  const ans = [];
  while (T) {
    const N = parseInt(input.shift());
    const coins = input
      .shift()
      .split(" ")
      .map((x) => +x);
    const M = input.shift();

    T -= 1;
  }
  process.exit();
});
