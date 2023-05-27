/*
https://www.acmicpc.net/problem/11725
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
  const n = parseInt(input.shift());
  const arr = input.map((x) => x.split(" ").map((x) => +x));
  arr.sort((a, b) => a[0] - b[0]);
  const graph = Array(n + 1)
    .fill()
    .map(() => []);
  const ans = Array(n + 1).fill(0);
  const ch = Array(n + 1).fill(0);
  arr.forEach((s) => {
    graph[s[0]].push(s[1]);
    graph[s[1]].push(s[0]);
  });
  const queue = [];
  queue.push(1);
  ch[1] = 1;
  while (queue.length) {
    const x = queue.shift();
    for (let i = 0; i < graph[x].length; i++) {
      const c = graph[x][i];
      if (ch[c] === 0) {
        ch[c] = 1;
        ans[c] = x;
        queue.push(c);
      }
    }
  }
  console.log(ans.slice(2, ans.length).join("\n"));
  process.exit();
});
