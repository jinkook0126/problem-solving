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
  const arr = input.map((x) => x.split(" ").map((k) => +k));
  let ans = 0;
  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  arr.forEach((x) => {
    const [a, b] = x;
    if (ans <= a) {
      ans = a + b;
    } else {
      ans += b;
    }
  });
  console.log(ans);
  process.exit();
});
// 3
// 2 1
// 8 3
// 5 7

// 15
