/*
https://www.acmicpc.net/problem/1676

비고
재귀함수로 팩토리얼을 구현하여 값을 구해 0의 개수를 찾았지만, 
위와 같은 방식으로 하면 시간초과가 난다.
값을 찾는게 아니라 0의 갯수를 찾는 것이기 때문에 규칙을 찾아 해결해야 한다.
https://itadventure.tistory.com/22
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
  const N = input[0];
  let cnt = 0;
  for (let i = 2; i <= N; i++) {
    if (i % 5 === 0) cnt += 1;
    if (i % 25 === 0) cnt += 1;
    if (i % 125 === 0) cnt += 1;
  }
  console.log(cnt);
  process.exit();
});
