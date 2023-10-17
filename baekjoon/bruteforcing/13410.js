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
  for (let i = 1; i <= K; i++) {
    ans = Math.max(
      ans,
      parseInt(
        String(i * N)
          .split("")
          .reverse()
          .join("")
      )
    );
  }
  console.log(ans);
  process.exit();
});
// 8 9
// 84
