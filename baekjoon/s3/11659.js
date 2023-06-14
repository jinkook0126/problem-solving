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
  const arr = input.shift();
  const prefixSum = Array(N + 1).fill(0);
  const ans = [];
  for (let i = 1; i <= N; i++) {
    prefixSum[i] = prefixSum[i - 1] + arr[i - 1];
  }
  for (let i = 0; i < input.length; i++) {
    const [from, to] = input[i];
    ans.push(prefixSum[to] - prefixSum[from - 1]);
  }
  console.log(ans.join("\n"));
  process.exit();
});
