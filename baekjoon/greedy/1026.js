// S4
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const N = parseInt(input[0]);
  const A = input[1].split(" ").map((x) => +x);
  const B = input[2].split(" ").map((x) => +x);
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    sum += A[i] * B[i];
  }
  console.log(sum);
  process.exit();
});
