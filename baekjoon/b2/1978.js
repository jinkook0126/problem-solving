/*
https://www.acmicpc.net/problem/1978

문제
주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

입력
첫 줄에 수의 개수 N이 주어진다. N은 100이하이다. 다음으로 N개의 수가 주어지는데 수는 1,000 이하의 자연수이다.

출력
주어진 수들 중 소수의 개수를 출력한다.

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
  const N = input.shift();
  const arr = input
    .shift()
    .split(" ")
    .map((x) => +x);
  let cnt = 0;
  for (let x of arr) {
    if (x === 1) continue;
    let ch = true;
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) {
        ch = false;
        break;
      }
    }
    if (ch) cnt += 1;
  }
  console.log(cnt);
  process.exit();
});
