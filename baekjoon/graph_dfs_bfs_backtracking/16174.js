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
  const N = parseInt(input.shift());
  let ans = false;
  const queue = [[0, 0]];
  const visit = Array(N)
    .fill()
    .map(() => Array(N).fill(0));
  visit[0][0] = 1;
  while (queue.length) {
    const [x, y] = queue.shift();
    if (x === N - 1 && y === N - 1) {
      ans = true;
      break;
    }
    const ny = y + input[x][y];
    const nx = x + input[x][y];
    if (ny >= 0 && ny < N && visit[x][ny] === 0) {
      visit[x][ny] = 1;
      queue.push([x, ny]);
    }
    if (nx >= 0 && nx < N && visit[nx][y] === 0) {
      visit[nx][y] = 1;
      queue.push([nx, y]);
    }
  }
  //   const DFS = (x, y) => {
  //     if (ans) return;
  //     if (x === N - 1 && y === N - 1) {
  //       ans = true;
  //       return;
  //     }
  //     const ny = y + input[x][y];
  //     const nx = x + input[x][y];
  //     if (ny >= 0 && ny < N && visit[x][ny] === 0) {
  //       visit[x][ny] = 1;
  //       DFS(x, ny);
  //     }
  //     if (nx >= 0 && nx < N && visit[nx][y] === 0) {
  //       visit[nx][y] = 1;
  //       DFS(nx, y);
  //     }
  //   };
  //   visit[0][0] = 1;
  //   DFS(0, 0);
  console.log(ans ? "HaruHaru" : "Hing");
  process.exit();
});

// 3
// 1 1 10
// 1 5 1
// 2 2 -1

// HaruHaru

// Hing
