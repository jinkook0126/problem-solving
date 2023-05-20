/*
https://www.acmicpc.net/problem/14425

문제
총 N개의 문자열로 이루어진 집합 S가 주어진다.
입력으로 주어지는 M개의 문자열 중에서 집합 S에 포함되어 있는 것이 총 몇 개인지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 문자열의 개수 N과 M (1 ≤ N ≤ 10,000, 1 ≤ M ≤ 10,000)이 주어진다. 
다음 N개의 줄에는 집합 S에 포함되어 있는 문자열들이 주어진다.
다음 M개의 줄에는 검사해야 하는 문자열들이 주어진다.
입력으로 주어지는 문자열은 알파벳 소문자로만 이루어져 있으며, 길이는 500을 넘지 않는다. 집합 S에 같은 문자열이 여러 번 주어지는 경우는 없다.

출력
첫째 줄에 M개의 문자열 중에 총 몇 개가 집합 S에 포함되어 있는지 출력한다.

비고
includes() 로 하게 되면 시간초과.
M 집합을 문자열로 join 하여 N 집합의 원소로 split 했을 경우 시간초과.
N 집합을 정규식으로 만들어 M 집합을 앞에 만든 정규식을 통과하는 filter. 목록의 갯수를 출력할 경우 시간초과.
N 집합을 map에 넣어서 M 집합을 돌며 map에 있으면 카운트 추가. 성공
( 아니 저 위에 2가지 방법은 for문이 하나인데 왜 안되는지 전혀 모르겠다. filter메소드가 시간이 오래 걸리는 건지? )
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
  const map = new Map();
  let cnt = 0;
  for (let i = 0; i < N; i++) {
    map.set(input[i], true);
  }
  for (let i = N; i < input.length; i++) {
    if (map.has(input[i])) cnt += 1;
  }
  console.log(cnt);
});
