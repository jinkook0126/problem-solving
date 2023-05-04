/*
경로탐색( 인접행렬 )
5 9
1 2 
1 3 
1 4 
2 1 
2 3 
2 5 
3 4 
4 2 
4 5
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
  const arr = Array(N + 1)
    .fill()
    .map((x) => Array(N + 1).fill(0));
  const ch = Array(N + 1).fill(0);
  let cnt = 0;
  for (const [i, j] of input) {
    arr[i][j] = 1;
  }
  const DFS = (L) => {
    if (L === N) {
      cnt += 1;
    } else {
      for (let i = 1; i <= N; i++) {
        if (ch[i] === 0 && arr[L][i] === 1) {
          ch[i] = 1;
          DFS(i);
          ch[i] = 0;
        }
      }
    }
  };
  ch[1] = 1;
  DFS(1);
  console.log(cnt);
  process.exit();
});
