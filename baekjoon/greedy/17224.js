// S4
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
  let [N, L, K] = input.shift();
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    const [low, high] = input[i];
    if (high <= L) {
      sum += 140;
      K -= 1;
    } else if (low <= L) {
      sum += 100;
      K -= 1;
    }
    if (K === 0) break;
  }

  console.log(sum);
  process.exit();
});
