/*
https://www.acmicpc.net/problem/
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
  let pt = 0;
  const T = parseInt(input.shift());
  const ans = [];
  for (let i = 0; i < T; i++) {
    const [M, N, K] = input[pt].split(" ").map((x) => +x);
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    let cnt = 0;
    const land = Array(N)
      .fill()
      .map((x) => Array(M).fill(0));

    for (let s = pt + 1; s <= pt + K; s++) {
      const [a, b] = input[s].split(" ").map((x) => +x);
      land[b][a] = 1;
    }
    const DFS = (x, y) => {
      for (let h = 0; h < 4; h++) {
        const nx = x + dx[h];
        const ny = y + dy[h];
        if (nx >= 0 && nx < N && ny >= 0 && ny < M && land[nx][ny] === 1) {
          land[nx][ny] = 0;
          DFS(nx, ny);
        }
      }
    };
    for (let l = 0; l < N; l++) {
      for (let k = 0; k < M; k++) {
        if (land[l][k] === 1) {
          land[l][k] = 0;
          cnt += 1;
          DFS(l, k);
        }
      }
    }
    ans.push(cnt);
    pt = pt + 1 + K;
  }
  console.log(ans.join("\n"));
  process.exit();
});
