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
  const arr = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const M = parseInt(input.shift());
  const ans = [];
  const prefixSum = Array(N + 1).fill(0);
  for (let i = 1; i <= N; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
  }
  for (let i = 0; i < input.length; i++) {
    const [from, to] = input[i].split(" ").map((x) => +x);
    ans.push(prefixSum[to] - prefixSum[from - 1]);
  }
  console.log(ans.join("\n"));
  process.exit();
});
