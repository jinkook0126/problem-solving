/*
https://www.acmicpc.net/problem/1225
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [N, M] = input[0].split(" ");
  let sum = 0;
  for (const i of N) {
    for (const j of M) {
      sum += Number(i) * Number(j);
    }
  }
  console.log(sum);
  process.exit();
});
