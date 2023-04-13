/*
https://www.acmicpc.net/problem/1929
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
  const [N, M] = input[0].split(" ").map((x) => +x);
  const arr = Array(M + 1)
    .fill()
    .map((_, i) => i);
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] === 0) continue;
    for (let j = i * 2; j < arr.length; j += i) {
      arr[j] = 0;
    }
  }
  console.log(arr.filter((x) => x !== 0 && x >= N).join("\n"));
  process.exit();
});
