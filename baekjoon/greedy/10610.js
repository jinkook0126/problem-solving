const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const arr = input
    .shift()
    .split("")
    .map((x) => +x);
  const sum = arr.reduce((prev, curr) => prev + curr, 0);
  if (!arr.includes(0)) {
    console.log(-1);
  } else if (sum % 3 !== 0) {
    console.log(-1);
  } else {
    console.log(arr.sort((a, b) => b - a).join(""));
  }
  process.exit();
});
