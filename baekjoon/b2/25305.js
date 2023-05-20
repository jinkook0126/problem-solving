/*
https://www.acmicpc.net/problem/25305

문제
2022 연세대학교 미래캠퍼스 슬기로운 코딩생활에 N명의 학생들이 응시했다.
이들 중 점수가 가장 높은 k명은 상을 받을 것이다. 이 때, 상을 받는 커트라인이 몇 점인지 구하라.
커트라인이란 상을 받는 사람들 중 점수가 가장 가장 낮은 사람의 점수를 말한다.

입력
첫째 줄에는 응시자의 수 N과 상을 받는 사람의 수 k가 공백을 사이에 두고 주어진다.

둘째 줄에는 각 학생의 점수 x가 공백을 사이에 두고 주어진다.

출력
상을 받는 커트라인을 출력하라. 
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, k] = input[0].split(" ").map((x) => +x);
  const stu = input[1].split(" ").map((x) => +x);
  stu.sort((a, b) => b - a);
  console.log(stu[k - 1]);
  process.exit();
});
