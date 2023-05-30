/*
https://www.acmicpc.net/problem/1541
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
  const arr = input
    .shift()
    .split("-")
    .map(
      (x) =>
        x
          .split("+")
          .map((x) => +x)
          .reduce((acc, prev) => acc + prev),
      0
    );
  let div = arr[0];
  for (let i = 1; i < arr.length; i++) {
    div -= arr[i];
  }
  console.log(div);
  process.exit();
});
