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
  let cnt = 0;
  let max = 0;
  const BFS = (x, y) => {
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    const queue = [[x, y]];
    let size = 1;
    while (queue.length) {
      const [cx, cy] = queue.pop();
      for (let i = 0; i < dx.length; i++) {
        const nx = cx + dx[i];
        const ny = cy + dy[i];
        if (nx >= 0 && nx < N && ny >= 0 && ny < M && input[nx][ny] === 1) {
          size += 1;
          input[nx][ny] = 0;
          queue.push([nx, ny]);
        }
      }
    }
    return size;
  };
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (input[i][j] === 1) {
        cnt += 1;
        input[i][j] = 0;
        let t = BFS(i, j);
        max = Math.max(t, max);
      }
    }
  }
  console.log([cnt, max].join("\n"));
  process.exit();
});
