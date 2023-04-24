/*
https://www.acmicpc.net/problem/17212
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line.trim()));
}).on("close", function () {
  let N = input.shift();
  const dy = Array(N + 1).fill(20000);
  dy[0] = 0;
  const wallet = [1, 2, 5, 7];
  for (let i = 0; i < wallet.length; i++) {
    for (let j = wallet[i]; j <= N; j++) {
      dy[j] = Math.min(dy[j - wallet[i]] + 1, dy[j]);
    }
  }
  console.log(dy[N]);
  process.exit();
});
