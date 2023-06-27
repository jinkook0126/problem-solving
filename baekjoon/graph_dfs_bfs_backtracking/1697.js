/*
https://www.acmicpc.net/problem/1743
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
  const [N, M] = input.shift();
  const visited = Array(100001).fill(0);
  const queue = [[N, 0]];
  visited[N] = 1;
  let ans = 0;
  while (queue.length) {
    const [num, sec] = queue.shift();
    if (num === M) {
      ans = sec;
      break;
    }
    for (let i = 0; i < 3; i++) {
      let newNum = 0;
      if (i === 0) {
        newNum = num + 1;
      } else if (i === 1) {
        newNum = num - 1;
      } else {
        newNum = num * 2;
      }

      if (newNum >= 0 && newNum <= 100000 && visited[newNum] === 0) {
        visited[newNum] = 1;
        queue.push([newNum, sec + 1]);
      }
    }
  }
  console.log(ans);
  process.exit();
});
