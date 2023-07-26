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
  const board = input.map((x) => x.split(" ").map((x) => +x));
  let flag = false;
  const queue = [[0, 0]];
  const dx = [0, 1];
  const dy = [1, 0];
  const visit = Array(N)
    .fill()
    .map(() => Array(N).fill(0));
  visit[0][0] = 1;
  while (queue.length) {
    const [cx, cy] = queue.shift();
    for (let i = 0; i < dx.length; i++) {
      const nx = cx + dx[i] * board[cx][cy];
      const ny = cy + dy[i] * board[cx][cy];
      if (nx >= 0 && nx < N && ny >= 0 && ny < N && visit[nx][ny] === 0) {
        if (board[nx][ny] === -1) {
          flag = true;
          break;
        }
        visit[nx][ny] = 1;
        queue.push([nx, ny]);
      }
    }
  }
  if (flag) {
    console.log("HaruHaru");
  } else {
    console.log("Hing");
  }

  process.exit();
});
// 3
// 1 1 10
// 1 5 1
// 2 2 -1

// HaruHaru
