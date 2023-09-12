const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line.trim()));
}).on("close", function () {
  let ans = 0;
  let sum = 0;
  let diff = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < input.length; i++) {
    sum = sum + input[i];
    let newDiff = Math.abs(100 - sum);
    if (newDiff <= diff) {
      ans = sum;
      diff = newDiff;
    }
    if (sum > 100) {
      break;
    }
  }
  console.log(ans);
  process.exit();
});
