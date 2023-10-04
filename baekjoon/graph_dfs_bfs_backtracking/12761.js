/*
https://www.acmicpc.net/problem/7562
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
  const [A, B, N, M] = input.shift();
  const visit = Array(100001).fill(0);
  let ans = Number.MAX_SAFE_INTEGER;
  const queue = [[N, 0]];
  visit[N] = 1;
  while (queue.length) {
    const [cx, cs] = queue.shift();
    if (cs >= ans) continue;
    if (cx === M) {
      ans = Math.min(ans, cs);
    } else {
      for (let i = 0; i < 8; i++) {
        let nx = 0;
        switch (i) {
          case 0:
            nx = cx + 1;
            break;
          case 1:
            nx = cx - 1;
            break;
          case 2:
            nx = cx + A;
            break;
          case 3:
            nx = cx - A;
            break;
          case 4:
            nx = cx + B;
            break;
          case 5:
            nx = cx - B;
            break;
          case 6:
            nx = cx * A;
            break;
          case 7:
            nx = cx * B;
            break;
        }
        if (nx >= 0 && nx <= 100_000 && visit[nx] === 0) {
          visit[nx] = 1;
          queue.push([nx, cs + 1]);
        }
      }
    }
  }
  console.log(ans);
  process.exit();
});
