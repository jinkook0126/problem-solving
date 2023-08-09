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
  let ans = 0;
  if (N === 1) {
    console.log(ans);
    return;
  }
  let dasom = input.shift();
  while (1) {
    let check = true;
    input.sort((a, b) => b - a);
    if (input[0] >= dasom) {
      ans += 1;
      check = false;
      dasom += 1;
      input[0] -= 1;
    }
    if (check) break;
  }
  console.log(ans);
  process.exit();
});
