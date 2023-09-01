const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const N = parseInt(input.shift());
  const board = input
    .shift()
    .split(" ")
    .map((x) => +x);
  board.unshift(0);
  const [start, end] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const visit = Array(10001).fill(0);

  const queue = [[start, 0]];
  visit[start] = 1;
  let ans = Number.MAX_SAFE_INTEGER;
  while (queue.length) {
    const [curr, cnt] = queue.shift();
    if (curr === end) {
      ans = cnt;
      break;
    }
    let i = 1;
    let tmp = curr + i * board[curr];
    while (tmp <= N) {
      if (visit[tmp] === 0) {
        visit[tmp] = 1;
        queue.push([tmp, cnt + 1]);
      }
      i += 1;
      tmp = curr + i * board[curr];
    }
    i = 1;
    tmp = curr - i * board[curr];
    while (tmp > 0) {
      if (visit[tmp] === 0) {
        visit[tmp] = 1;
        queue.push([tmp, cnt + 1]);
      }
      i += 1;
      tmp = curr - i * board[curr];
    }
  }
  console.log(ans === Number.MAX_SAFE_INTEGER ? -1 : ans);
  process.exit();
});
