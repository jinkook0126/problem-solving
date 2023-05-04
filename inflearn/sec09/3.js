/*
경로탐색( 인접리스트 )
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
  let cnt = 0;
  const [N, M] = input.shift();
  const graph = Array(N + 1)
    .fill()
    .map(() => []);
  const ch = Array(N + 1).fill(0);
  for (const [a, b] of input) {
    graph[a].push(b);
  }
  const DFS = (L) => {
    if (L === N) {
      cnt += 1;
    } else {
      for (let i = 0; i < graph[L].length; i++) {
        if (ch[graph[L][i]] === 0) {
          ch[graph[L][i]] = 1;
          DFS(graph[L][i]);
          ch[graph[L][i]] = 0;
        }
      }
    }
  };
  ch[1] = 1;
  DFS(1);
  console.log(cnt);
  process.exit();
});
