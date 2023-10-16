const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [A, B] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const N = parseInt(input.shift());
  let ans = Math.abs(A - B);
  input.forEach((x) => {
    ans = Math.min(Math.abs(parseInt(x, 10) - B) + 1, ans);
  });
  console.log(ans);

  process.exit();
});
