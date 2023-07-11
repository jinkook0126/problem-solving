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
  const arr = Array(N + 1)
    .fill()
    .map(() => []);
  input.forEach((x) => {
    const [a, b] = x;
    arr[a].push(b);
    arr[b].push(a);
  });
  arr.forEach((x) => {
    x.sort((a, b) => a - b);
  });
  const visit = Array(N + 1).fill(-1);
  const DFS = (L, D) => {
    for (let i = 0; i < arr[L].length; i++) {
      if (visit[arr[L][i]] === -1) {
        visit[arr[L][i]] = D + 1;
        DFS(arr[L][i], D + 1);
      }
    }
  };
  visit[R] = 0;
  DFS(R, 0);
  visit.shift();
  console.log(visit.join("\n"));
  process.exit();
});
