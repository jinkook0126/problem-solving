const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [N, K] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const arr = input
    .shift()
    .split(" ")
    .map((x) => +x);
  let sum = 0;
  let lt = 0;
  let rt = K - 1;
  for (let i = lt; i < K; i++) {
    sum += arr[i];
  }
  let ans = sum;
  while (rt < N - 1) {
    sum = sum - arr[lt++] + arr[++rt];
    ans = Math.max(ans, sum);
  }
  console.log(ans);
  process.exit();
});
