/*
https://www.acmicpc.net/problem/1021
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
  const list = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const deque = Array(N)
    .fill(0)
    .map((_, i) => i + 1);
  let cnt = 0;
  while (list.length) {
    if (deque[0] === list[0]) {
      list.shift();
      deque.shift();
    } else {
      const left = deque.indexOf(list[0]);
      const right = deque.length - left;
      cnt += 1;
      if (left >= right) {
        deque.unshift(deque.pop());
      } else {
        deque.push(deque.shift());
      }
    }
  }
  console.log(cnt);
  process.exit();
});
