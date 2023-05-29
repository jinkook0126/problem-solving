/*
https://www.acmicpc.net/problem/10552
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(
    line
      .trim()
      .split(" ")
      .map((x) => +x)
  );
}).on("close", function () {
  const [N, M, P] = input.shift();
  const hate = new Set();
  const hateArr = [];
  const favoArr = [];
  for (const [a, b] of input) {
    favoArr.push(a);
    hateArr.push(b);
    hate.add(b);
  }
  let ans = 0;
  const visited = Array(M + 1).fill(0);
  const changeChannel = (ch) => {
    if (hate.has(ch)) {
      const to = favoArr[hateArr.indexOf(ch)];
      if (visited[to] === 0) {
        visited[to] = 1;
        ans += 1;
        changeChannel(to);
      } else {
        ans = -1;
      }
    }
  };
  visited[P] = 1;
  changeChannel(P);
  console.log(ans);
  process.exit();
});
