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
  input.sort((a, b) => b - a);
  const arr = input.splice(0, 42);
  const range = [60, 100, 140, 200, 250];
  let sum = arr.reduce((prev, curr) => prev + curr, 0);
  let union = 0;
  arr.forEach((lv) => {
    for (let i = 0; i < range.length; i++) {
      if (lv >= range[i]) {
        union += 1;
      }
    }
  });
  console.log([sum, union].join("\n"));
  process.exit();
});
