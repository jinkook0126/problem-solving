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
  const X = input.pop();
  const arr = Array(N + 1)
    .fill()
    .map(() => []);
  input.forEach((x) => {
    const [a, b] = x;
    arr[b].push(a);
  });
  const visit = Array(N + 1).fill(0);
  let cnt = 0;
  const DFS = (L) => {
    for (let i = 0; i < arr[L].length; i++) {
      if (visit[arr[L][i]] === 0) {
        visit[arr[L][i]] = 1;
        cnt += 1;
        DFS(arr[L][i]);
      }
    }
  };
  visit[X] = 1;
  DFS(X);
  console.log(cnt);
  process.exit();
});
// 6 4
// 1 6
// 2 4
// 4 6
// 4 5
// 5
