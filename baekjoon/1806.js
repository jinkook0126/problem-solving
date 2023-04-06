/*
https://www.acmicpc.net/problem/1806

문제
10,000 이하의 자연수로 이루어진 길이 N짜리 수열이 주어진다. 
이 수열에서 연속된 수들의 부분합 중에 그 합이 S 이상이 되는 것 중, 가장 짧은 것의 길이를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N (10 ≤ N < 100,000)과 S (0 < S ≤ 100,000,000)가 주어진다. 
둘째 줄에는 수열이 주어진다. 수열의 각 원소는 공백으로 구분되어져 있으며, 10,000이하의 자연수이다.

출력
첫째 줄에 구하고자 하는 최소의 길이를 출력한다. 
만일 그러한 합을 만드는 것이 불가능하다면 0을 출력하면 된다.

비고
투포인터 알고리즘으로 구현
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
  const [N, S] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const arr = input[0].split(" ").map((x) => +x);
  let answer = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;
  let ch = false;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    while (sum >= S) {
      answer = Math.min(answer, right - left + 1);
      sum -= arr[left++];
      ch = true;
    }
  }
  console.log(ch ? answer : 0);
});
