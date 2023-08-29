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
  const map = new Map();
  const m1 = input.splice(0, N);
  const arr = [];
  let cnt = 0;
  m1.forEach((x, i) => {
    map.set(x, i);
  });
  input.forEach((x, i) => {
    arr.push(map.get(x));
  });
  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (arr[i] > arr[j]) {
        cnt += 1;
        break;
      }
    }
  }
  console.log(cnt);
  process.exit();
});
