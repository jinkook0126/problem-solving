// B2
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line.trim()));
}).on("close", function () {
  let N = 1000 - input.shift();
  let cnt = 0;
  const arr = [500, 100, 50, 10, 5, 1];
  for (let i = 0; i < arr.length; i++) {
    if (N >= arr[i]) {
      cnt += parseInt(N / arr[i]);
      N = N % arr[i];
    }
  }
  console.log(cnt);
  process.exit();
});
