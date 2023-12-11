const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const N = parseInt(input.shift());
  const arr = input.map((x) => x.split(" "));
  const res = Array(N).fill(0);
  for (let i = 0; i < N; i++) {
    const set = new Set();
    for (let j = 0; j < 5; j++) {
      for (let k = 0; k < N; k++) {
        if (i === k) continue;
        if (arr[i][j] === arr[k][j]) {
          set.add(k);
        }
      }
    }
    res[i] = set.size;
  }
  let win = 0;
  for (let i = 1; i < res.length; i++) {
    if (res[i] > res[win]) {
      win = i;
    } else if (res[i] === res[win]) {
      win = Math.min(i, win);
    }
  }
  console.log(win + 1);
  process.exit();
});
// 5
// 2 3 1 7 3
// 4 1 9 6 8
// 5 5 2 4 4
// 6 5 2 6 7
// 8 4 2 2 2
