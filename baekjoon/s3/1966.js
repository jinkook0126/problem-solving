/*
https://www.acmicpc.net/problem/1966

비고
큐 구현은 당연히 쉬었으나 계속 움직이는 원소의 위치를 기억하는 방법에 대해서 고민이 길었다.
map 으로 하려고 하였으나 중복된 숫자를 어떻게든 다른방법으로 해결하려 해서 오래 걸렸다.
결국 최초 list를 만들 때 2차원 배열로 index를 기억하고 있다가 삭제 시 index를 M과 비교하는 방법으로 하였다.
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
  const res = [];
  while (input.length !== 0) {
    const [N, M] = input
      .shift()
      .split(" ")
      .map((x) => +x);
    const list = input
      .shift()
      .split(" ")
      .map((x, i) => [+x, i]);
    let cnt = 0;
    while (list.length !== 0) {
      let max = Math.max(...list.map((x) => x[0]));
      if (max === list[0][0]) {
        cnt += 1;
        if (list[0][1] === M) {
          break;
        }
        list.shift();
      } else {
        list.push(list.shift());
      }
    }
    res.push(cnt);
  }
  console.log(res.join("\n"));
  process.exit();
});
