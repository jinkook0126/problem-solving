/*
https://www.acmicpc.net/problem/11654

문제
알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.

입력
입력으로 주어진 글자의 아스키 코드 값을 출력한다.

출력
첫째 줄에 단어의 개수를 출력한다.

비고
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
  console.log(input.shift().charCodeAt());
  process.exit();
});
