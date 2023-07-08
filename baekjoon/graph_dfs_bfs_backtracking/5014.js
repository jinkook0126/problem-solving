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
  const [F, S, G, U, D] = input[0];
  let min = Infinity;
  const queue = [[S, 0]];
  const visit = Array(F + 1).fill(0);
  visit[S] = 1;
  while (queue.length) {
    const [x, cnt] = queue.shift();
    if (x === G) {
      min = Math.min(cnt, min);
    } else {
      const up = x + U;
      const down = x - D;
      if (up <= F && visit[up] === 0) {
        visit[up] = 1;
        queue.push([up, cnt + 1]);
      }
      if (down >= 1 && visit[down] === 0) {
        visit[down] = 1;
        queue.push([down, cnt + 1]);
      }
    }
  }
  console.log(min === Infinity ? "use the stairs" : min);
  process.exit();
});
