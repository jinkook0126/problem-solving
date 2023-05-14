/*
https://www.acmicpc.net/problem/1106
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(
    line
      .trim()
      .split(" ")
      .map((x) => +x)
  );
}).on("close", function () {
  const [C, N] = input.shift();
  const dy = Array(C + 101).fill(Infinity);
  dy[0] = 0;
  for (let i = 0; i < input.length; i++) {
    const [cost, person] = input[i];
    for (let j = person; j < dy.length; j++) {
      dy[j] = Math.min(dy[j], dy[j - person] + cost);
    }
  }
  let ans = dy[C];
  for (let i = C + 1; i < dy.length; i++) {
    ans = Math.min(ans, dy[i]);
  }
  console.log(ans);
  process.exit();
});
