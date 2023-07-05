/*
S2
 */
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
    .map((x) => BigInt(x));
  let i = 0;
  let j = N - 1;
  let min = Number.MAX_SAFE_INTEGER;
  let ans = [];
  while (i < j) {
    const tmp = arr[i] + arr[j];
    const abs = parseInt(tmp.toString().replace("-", ""), 10);
    if (abs <= min) {
      ans = [arr[i], arr[j]];
      min = abs;
    }
    if (tmp === 0n) break;
    else if (tmp > 0n) {
      j -= 1;
    } else if (tmp < 0n) {
      i += 1;
    }
  }
  console.log(ans.map((x) => x.toString()).join(" "));
  process.exit();
});
