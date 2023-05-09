/*
https://www.acmicpc.net/problem/1260
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
  const [N, M, V] = input.shift();
  const graph = Array(N + 1)
    .fill()
    .map((x) => []);
  const ch = Array(N + 1).fill(0);
  const ansDfs = [];
  for (let [a, b] of input) {
    graph[a].push(b);
    graph[b].push(a);
  }
  graph.forEach((line) => {
    line.sort((a, b) => a - b);
  });
  const DFS = (L) => {
    if (ch[L] === 1) return;
    ch[L] = 1;
    ansDfs.push(L);
    for (let i = 0; i < graph[L].length; i++) {
      const c = graph[L][i];
      if (ch[c] === 0) DFS(c);
    }
  };
  DFS(V);

  const ansBfs = [];
  const ch2 = Array(N + 1).fill(0);
  const queue = [V];
  while (queue.length) {
    const x = queue.shift();
    if (ch2[x] === 1) continue;
    ch2[x] = 1;
    ansBfs.push(x);
    for (let i = 0; i < graph[x].length; i++) {
      const c = graph[x][i];
      if (ch2[c] === 0) queue.push(c);
    }
  }
  console.log([ansDfs.join(" "), ansBfs.join(" ")].join("\n"));
  process.exit();
});
