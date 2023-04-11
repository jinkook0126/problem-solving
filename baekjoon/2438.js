/*
https://www.acmicpc.net/problem/2438

문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

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
  const N = input.shift();
  const res = [];
  for (let i = 1; i <= N; i++) {
    res.push("*".repeat(i));
  }
  console.log(res.join("\n"));
  process.exit();
});
