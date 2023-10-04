const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [R, C] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const visit = Array(R)
    .fill()
    .map(() => Array(C).fill(0));
  const board = input.map((x) => x.split(""));
  const ans = [0, 0];
  const BFS = (x, y) => {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let v = 0;
    let o = 0;
    const queue = [[x, y]];
    while (queue.length) {
      const [cx, cy] = queue.shift();
      if (board[cx][cy] === "o") {
        o += 1;
      }
      if (board[cx][cy] === "v") {
        v += 1;
      }
      board[cx][cy] = "#";
      for (let i = 0; i < 4; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];
        if (
          nx >= 0 &&
          nx < R &&
          ny >= 0 &&
          ny < C &&
          board[nx][ny] !== "#" &&
          visit[nx][ny] === 0
        ) {
          visit[nx][ny] = 1;
          queue.push([nx, ny]);
        }
      }
    }
    return [v, o];
  };
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (board[i][j] !== "#" && board[i][j] !== ".") {
        visit[i][j] = 1;
        const [v, o] = BFS(i, j);
        if (o > v) {
          ans[0] += o;
        } else {
          ans[1] += v;
        }
      }
    }
  }
  console.log(ans.join(" "));
  process.exit();
});
// 6 6
// ...#..
// .##v#.
// #v.#.#
// #.o#.#
// .###.#
// ...###

// 0 2
