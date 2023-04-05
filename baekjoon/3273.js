/*
https://www.acmicpc.net/problem/3273

문제
n개의 서로 다른 양의 정수 a1, a2, ..., an으로 이루어진 수열이 있다. ai의 값은 1보다 크거나 같고, 1000000보다 작거나 같은 자연수이다. 
자연수 x가 주어졌을 때, ai + aj = x (1 ≤ i < j ≤ n)을 만족하는 (ai, aj)쌍의 수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 수열의 크기 n이 주어진다. 다음 줄에는 수열에 포함되는 수가 주어진다. 셋째 줄에는 x가 주어진다. (1 ≤ n ≤ 100000, 1 ≤ x ≤ 2000000)

출력
문제의 조건을 만족하는 쌍의 개수를 출력한다.

비고
데이터의 갯수가 많으므로 이중 for문을 통해 구현하면 시간초과 발생.
리스트를 오름차순으로 정렬하여 투포인터를 통해 두 값의 합이 X와 같을때, 클 때, 작을 때를
적절히 분기하여 처리.
위 로직 중 오름차순으로 정렬해도 되나? 라는 의문을 가짐.
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
  const X = parseInt(input.pop());
  const arr = input[0].split(" ").map((t) => +t);
  let cnt = 0;
  arr.sort((a, b) => a - b);
  let lp = 0;
  let rp = arr.length - 1;
  while (lp < rp) {
    const sum = arr[lp] + arr[rp];
    if (sum === X) {
      cnt++;
      lp++;
      rp--;
    } else if (sum < X) {
      lp++;
    } else if (sum > X) {
      rp--;
    }
  }
  console.log(cnt);
  process.exit();
});
