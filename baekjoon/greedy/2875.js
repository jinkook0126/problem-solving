// G5
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
  let [N, M, K] = input[0];
  let team = 0;
  while (1) {
    N -= 2;
    M -= 1;
    if (N < 0 || M < 0 || N + M < K) {
      break;
    }
    team += 1;
  }
  console.log(team);
  process.exit();
});
