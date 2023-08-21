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
  input.sort((a, b) => a - b);
  let ans = 0;
  for (let i = 0; i < input.length; i++) {
    ans += Math.abs(i + 1 - input[i]);
  }
  console.log(ans);
  process.exit();
});
