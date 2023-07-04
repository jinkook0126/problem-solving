// S4
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line.trim()));
}).on("close", function () {
  const N = input.shift();
  let cnt = 0;
  let sum = 0;
  let i = 1;
  while (1) {
    sum += i;
    cnt += 1;
    if (sum > N) {
      break;
    }
    i += 1;
  }
  console.log(cnt - 1);
  process.exit();
});
