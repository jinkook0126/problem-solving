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
  const graph = Array(N + 1)
    .fill()
    .map(() => []);
  input.forEach((x) => {
    const [a, b] = x;
    graph[a].push(b);
    graph[b].push(a);
  });
  const queue = [[1, 0]];
  const ans = [];
  const visit = Array(N + 1).fill(-1);
  let max = Number.MIN_SAFE_INTEGER;
  while (queue.length) {
    const [x, cnt] = queue.shift();
    visit[x] = cnt;
    max = Math.max(cnt, max);
    for (let i = 0; i < graph[x].length; i++) {
      if (visit[graph[x][i]] === -1) {
        visit[graph[x][i]] = cnt + 1;
        queue.push([graph[x][i], cnt + 1]);
      }
    }
  }
  ans.push(visit.findIndex((x) => x === max));
  ans.push(max);
  ans.push(visit.filter((x) => x === max).length);
  console.log(ans.join(" "));
  process.exit();
});
// 첫 번째는 숨어야 하는 헛간 번호를(만약 거리가 같은 헛간이 여러개면 가장 작은 헛간 번호를 출력한다),
// 두 번째는 그 헛간까지의 거리를,
//  세 번째는 그 헛간과 같은 거리를 갖는 헛간의 개수를 출력해야한다.

// 6 7
// 3 6
// 4 3
// 3 2
// 1 3
// 1 2
// 2 4
// 5 2

// 4 2 3
