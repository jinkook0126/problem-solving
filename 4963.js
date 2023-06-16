/*
https://www.acmicpc.net/problem/1003
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
  input.pop();
  const ans = [];
  while (input.length) {
    const [H, W] = input
      .shift()
      .split(" ")
      .map((x) => +x);
    const arr = input.splice(0, W).map((x) => x.split(" ").map((x) => +x));
    let cnt = 0;
    const BFS = (x, y) => {
      const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
      const dy = [0, 1, 1, 1, 0, -1, -1, -1];
      const queue = [[x, y]];
      while (queue.length) {
        const [cx, cy] = queue.shift();
        for (let i = 0; i < dx.length; i++) {
          const nx = cx + dx[i];
          const ny = cy + dy[i];
          if (nx >= 0 && nx < W && ny >= 0 && ny < H && arr[nx][ny] === 1) {
            arr[nx][ny] = 0;
            queue.push([nx, ny]);
          }
        }
      }
    };
    for (let i = 0; i < W; i++) {
      for (let j = 0; j < H; j++) {
        if (arr[i][j] === 1) {
          cnt += 1;
          BFS(i, j);
        }
      }
    }
    ans.push(cnt);
  }
  console.log(ans.join("\n"));
  process.exit();
});
