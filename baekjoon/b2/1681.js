/*
https://www.acmicpc.net/problem/1681
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
  const [N, L] = input[0].split(" ").map((x) => +x);
  let cnt = 0;
  let ans = 0;
  while (cnt < N) {
    ans += 1;
    if (!String(ans).includes(L)) {
      cnt += 1;
    }
  }
  console.log(ans);
  process.exit();
});
