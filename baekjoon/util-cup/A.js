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
  const M = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const ans = [];
  const findRange = (x) => {
    if (x === 300) return 1;
    if (x >= 275) return 2;
    if (x >= 250) return 3;
    return 4;
  };
  for (let i = 0; i < N; i++) {
    ans.push(findRange(M[i]));
  }
  console.log(ans.join(" "));
  process.exit();
});
