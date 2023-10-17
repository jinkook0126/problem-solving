const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const T = parseInt(input.shift());
  const lists = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const ans = [];
  lists.forEach((x) => {
    const tmp = [];
    for (let i = 1; i < x; i++) {
      if (x % i === 0) {
        tmp.push(i);
      }
    }
    const sum = tmp.reduce((prev, curr) => prev + curr, 0);
    if (sum === x) ans.push("Perfect");
    else if (sum < x) ans.push("Deficient");
    else ans.push("Abundant");
  });
  console.log(ans.join("\n"));
  process.exit();
});
// 3
// 28 21 36

// Perfect
// Deficient
// Abundant
