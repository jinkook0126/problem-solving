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
  const board = input;
  let copyBoard = [];
  let w = 0;
  let ans = 0;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const BFS = (x, y) => {
    const queue = [[x, y]];
    while (queue.length) {
      const [cx, cy] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];
        if (nx >= 0 && nx < N && ny >= 0 && ny < M && copyBoard[nx][ny] === 0) {
          copyBoard[nx][ny] = 2;
          queue.push([nx, ny]);
        }
      }
    }
  };
  const DFS = () => {
    if (w === 3) {
      copyBoard = board.map((x) => x.slice());
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
          if (copyBoard[i][j] === 2) {
            BFS(i, j);
          }
        }
      }
      let tmp = 0;
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
          if (copyBoard[i][j] === 0) {
            tmp += 1;
          }
        }
      }
      ans = Math.max(ans, tmp);
    } else {
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
          if (board[i][j] === 0) {
            board[i][j] = 1;
            w += 1;
            DFS();
            w -= 1;
            board[i][j] = 0;
          }
        }
      }
    }
  };
  DFS();
  console.log(ans);
  process.exit();
});
// 7 7
// 2 0 0 0 1 1 0
// 0 0 1 0 1 2 0
// 0 1 1 0 1 0 0
// 0 1 0 0 0 0 0
// 0 0 0 0 0 1 1
// 0 1 0 0 0 0 0
// 0 1 0 0 0 0 0

// 27
