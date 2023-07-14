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
  const [X, Y] = input.shift().map((x) => BigInt(x));
  const Z = parseInt((Y * 100n) / X);
  let left = 1n;
  let right = 1_000_000_000n;
  let count = 0;
  while (left <= right) {
    const mid = (right + left) / 2n;
    const Z2 = parseInt(((Y + mid) * 100n) / (X + mid));
    if (Z2 > Z) {
      count = mid;
      right = mid - 1n;
    } else {
      left = mid + 1n;
    }
  }
  console.log(count === 0 ? -1 : count.toString());
  process.exit();
});

// 100 80
// 6
