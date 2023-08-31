const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [N, M] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const board = input.map((x) => x.split(""));
  let ans = Infinity;
  const dxdy = [];
  for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      dxdy.push([i, j]);
    }
  }
  console.log(dxdy);
  for (let i = 0; i < dxdy.length; i++) {}
  console.log(ans);
  process.exit();
});
// 10 13
// BBBBBBBBWBWBW
// BBBBBBBBBWBWB
// BBBBBBBBWBWBW
// BBBBBBBBBWBWB
// BBBBBBBBWBWBW
// BBBBBBBBBWBWB
// BBBBBBBBWBWBW
// BBBBBBBBBWBWB
// WWWWWWWWWWBWB
// WWWWWWWWWWBWB

// 1
