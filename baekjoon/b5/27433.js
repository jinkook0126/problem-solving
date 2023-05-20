/*
https://www.acmicpc.net/problem/27433

문제
0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 정수 N(0 ≤ N ≤ 20)이 주어진다.

출력
첫째 줄에 N!을 출력한다.

비고
재귀함수 이용해서 풀이

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
  const [num] = input;
  const DFS = (n) => {
    if (n === 0) return 1;
    else {
      return n * DFS(n - 1);
    }
  };
  console.log(DFS(num));
});
