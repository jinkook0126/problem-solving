/*
https://www.acmicpc.net/problem/1182
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
  let cnt = 0;
  const arr = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const ch = Array(arr.length).fill(0);
  const DFS = (L, sum) => {
    if (L === N) {
      if (sum === S) cnt += 1;
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  };
  DFS(0, 0);
  if (S === 0) cnt -= 1;
  console.log(cnt);
  process.exit();
});
