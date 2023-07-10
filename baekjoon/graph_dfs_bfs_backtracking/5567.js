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
  const m = parseInt(input.shift());
  const arr = Array(n + 1)
    .fill()
    .map(() => []);
  input.forEach((x) => {
    const [a, b] = x.split(" ").map((x) => +x);
    arr[a].push(b);
    arr[b].push(a);
  });
  const visit = Array(n + 1).fill(0);
  visit[1] = 1;
  let friend = 0;
  const queue = [[1, 1]];
  while (queue.length) {
    const [curr, depth] = queue.shift();
    for (let i = 0; i < arr[curr].length; i++) {
      if (visit[arr[curr][i]] === 0 && depth < 3) {
        friend += 1;
        visit[arr[curr][i]] = 1;
        queue.push([arr[curr][i], depth + 1]);
      }
    }
  }
  console.log(friend);
  process.exit();
});
