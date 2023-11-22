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
  const arr = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const curr = parseInt(input.shift()) - 1;
  const visit = Array(arr.length).fill(0);
  let cnt = 1;

  const queue = [curr];
  visit[curr] = 1;

  while (queue.length) {
    const cx = queue.shift();
    const right = cx + arr[cx];
    const left = cx - arr[cx];
    if (right < n && visit[right] === 0) {
      visit[right] = 1;
      cnt += 1;
      queue.push(right);
    }
    if (left >= 0 && visit[left] === 0) {
      visit[left] = 1;
      cnt += 1;
      queue.push(left);
    }
  }
  console.log(cnt);
  process.exit();
});
// 5
// 1 4 2 2 1
// 3

// 5
