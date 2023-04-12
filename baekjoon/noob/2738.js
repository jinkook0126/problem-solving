/*
https://www.acmicpc.net/problem/2738
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
  const [N, M] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const res = Array(N)
    .fill(0)
    .map(() => []);
  const arr1 = [];
  const arr2 = [];
  for (let i = 0; i < N; i++) {
    arr1.push(input[i].split(" ").map((x) => +x));
  }
  for (let i = N; i < N * 2; i++) {
    arr2.push(input[i].split(" ").map((x) => +x));
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      res[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  console.log(res.map((x) => x.join(" ")).join("\n"));
  process.exit();
});
