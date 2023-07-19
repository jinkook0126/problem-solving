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
  if (N === 0) {
    console.log(0);
    return;
  }
  let sum = 0;
  let count = 0;
  input[0].forEach((x) => {
    sum += x;
    if (sum === M) {
      count += 1;
      sum = 0;
    } else if (sum > M) {
      count += 1;
      sum = x;
    }
  });
  if (sum !== 0) count += 1;
  console.log(count);
  process.exit();
});
