/*
https://www.acmicpc.net/problem/19532

문제
본문 참고

입력
본문 참고

출력
문제의 답인 x와 y를 공백으로 구분해 출력한다.

비고
이런 문제가 있나 싶다.
처음엔 연립방정식 풀이로 접근하였으나 문제 구분이 brute force이므로 
brute force 방식을 생각하니 2중 for문으로 x,y값을 범위 만큼 돌려야 하나?
그럼 O(N^2)이 되므로 시간초과 아닐까? 하여 해를 찾지 못하여 인터넷에 찾아보니
2중 for문으로 무식하게 돌려서 푸는게 맞았던 것 같다.
만약 x,y의 범위가 좀 더 컸으면 brute force 방식은 틀렸을 것 같다.
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
  const [a, b, c, d, e, f] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const res = [];
  for (let i = -999; i <= 999; i++) {
    for (let j = -999; j <= 999; j++) {
      if (a * i + b * j === c && d * i + e * j === f) {
        res.push(i, j);
        break;
      }
    }
  }
  console.log(res.join(" "));
});
