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
  const [N, M, K, X] = input.shift();
  const lists = Array(N + 1)
    .fill()
    .map(() => []);
  input.forEach((x) => {
    const [a, b] = x;
    lists[a].push(b);
  });
  const visit = Array(N + 1).fill(0);
  const ans = [];
  visit[X] = 1;
  const queue = [[X, 0]];
  while (queue.length) {
    const [c, s] = queue.shift();
    if (s === K) {
      ans.push(c);
      continue;
    }
    for (let i = 0; i < lists[c].length; i++) {
      const n = lists[c][i];
      if (visit[n] === 0) {
        visit[n] = 1;
        queue.push([n, s + 1]);
      }
    }
  }
  console.log(ans.length === 0 ? -1 : ans.sort((a, b) => a - b).join("\n"));
  process.exit();
});

// 4 4 2 1
// 1 2
// 1 3
// 2 3
// 2 4

// 4
