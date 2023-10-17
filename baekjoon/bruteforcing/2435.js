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
  const [N, K] = input.shift();
  let ans = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i <= N - K; i++) {
    ans = Math.max(
      input[0].slice(i, i + K).reduce((prev, curr) => prev + curr, 0),
      ans
    );
  }
  console.log(ans);
  process.exit();
});
// 10 2
// 3 -2 -4 -9 0 3 7 13 8 -3

// 21
