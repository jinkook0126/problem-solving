const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  let N = parseInt(input.shift());
  const ans = [];
  while (N > 0) {
    const [H, W] = input
      .shift()
      .split(" ")
      .map((x) => +x);
    const board = input.splice(0, H).map((x) => x.split(""));
    const BFS = (x, y) => {
      const dx = [-1, 0, 1, 0];
      const dy = [0, 1, 0, -1];
      const queue = [[x, y]];
      while (queue.length) {
        const [cx, cy] = queue.shift();
        for (let i = 0; i < dx.length; i++) {
          const nx = cx + dx[i];
          const ny = cy + dy[i];
          if (nx >= 0 && nx < H && ny >= 0 && ny < W && board[nx][ny] === "#") {
            queue.push([nx, ny]);
            board[nx][ny] = ".";
          }
        }
      }
    };
    let cnt = 0;
    for (let i = 0; i < H; i++) {
      for (let j = 0; j < W; j++) {
        if (board[i][j] === "#") {
          board[i][j] = ".";
          BFS(i, j);
          cnt += 1;
        }
      }
    }
    ans.push(cnt);
    N -= 1;
  }
  console.log(ans.join("\n"));
  process.exit();
});
