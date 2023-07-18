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
  const arr = Array(N)
    .fill(0)
    .map((_, i) => i + 1);
  const left = [];
  while (arr.length !== 1) {
    left.push(arr.shift());
    arr.push(arr.shift());
  }
  console.log([...left, ...arr].join(" "));
  process.exit();
});
