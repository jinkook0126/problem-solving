/*
https://www.acmicpc.net/problem/11478

문제
문자열 S가 주어졌을 때, S의 서로 다른 부분 문자열의 개수를 구하는 프로그램을 작성하시오.
부분 문자열은 S에서 연속된 일부분을 말하며, 길이가 1보다 크거나 같아야 한다.
예를 들어, ababc의 부분 문자열은 a, b, a, b, c, ab, ba, ab, bc, aba, bab, abc, abab, babc, ababc가 있고, 서로 다른것의 개수는 12개이다.

입력
첫째 줄에 문자열 S가 주어진다. S는 알파벳 소문자로만 이루어져 있고, 길이는 1,000 이하이다.

출력
첫째 줄에 S의 서로 다른 부분 문자열의 개수를 출력한다.

비고
중복제거를 하여 개수를 구하는건 쉽다. set 을 이용하여 중복제거하며 add하면 되기 때문.
문제는, 부분 문자열을 구하는 방법이었다. 
재귀함수를 통해 여러 방법으로 해보았지만, 원하는 list 를 얻을 수 없었다.
하여 인터넷을 통햏 완전탐색 중 Brute Forse 방법을 통해 list를 얻을 수 있었다.
위 방법은 조건에 맞게 반복문을 여러 번 돌리는 케이스로 시간 효율은 좋지 않다.
완전 탐색을 할 경우 꼭 DFS/BFS, 재귀 뿐만 아니라 Brute Force방법도 항상 고려해보자.
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
  const str = input.shift();
  const set = new Set();
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      set.add(str.substring(i, j + 1));
    }
  }
  console.log(set.size);
  process.exit();
});
