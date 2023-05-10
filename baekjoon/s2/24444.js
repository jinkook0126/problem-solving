/*
https://www.acmicpc.net/problem/24444
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
  const [N, M, R] = input.shift();
  const graph = Array(N + 1)
    .fill()
    .map((x) => []);
  const ch = Array(N + 1).fill(0);
  let cnt = 0;
  for (let [a, b] of input) {
    graph[a].push(b);
    graph[b].push(a);
  }
  const queue = [R];
  ch[R] = ++cnt;
  while (queue.length) {
    const x = queue.shift();
    graph[x].sort((a, b) => a - b);
    for (let i = 0; i < graph[x].length; i++) {
      const c = graph[x][i];
      if (ch[c] === 0) {
        ch[c] = ++cnt;
        queue.push(c);
      }
    }
  }
  ch.shift();
  console.log(ch.join("\n"));
  process.exit();
});
