/*
https://www.acmicpc.net/problem/1181

문제
알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.
길이가 짧은 것부터
길이가 같으면 사전 순으로
단, 중복된 단어는 하나만 남기고 제거해야 한다.

입력
첫째 줄에 단어의 개수 N이 주어진다. (1 ≤ N ≤ 20,000) 둘째 줄부터 N개의 줄에 걸쳐 알파벳 소문자로 이루어진 단어가 한 줄에 하나씩 주어진다.
주어지는 문자열의 길이는 50을 넘지 않는다.

출력
조건에 따라 정렬하여 단어들을 출력한다.
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
  input.shift();
  const hash = new Map();
  input.forEach((x) => {
    if (!hash.has(x)) hash.set(x, x.length);
  });
  const arr2 = Array.from(hash);
  arr2.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0]);
    } else {
      return a[1] - b[1];
    }
  });
  console.log(arr2.map((x) => x[0]).join("\n"));
  process.exit();
});
