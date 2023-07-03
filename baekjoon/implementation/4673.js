/*
S5
*/
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {}).on("close", function () {
  const arr = Array(10001).fill(0);
  for (let i = 1; i <= 10000; i++) {
    let n = i;
    let sum = i;
    while (n >= 10) {
      sum += n % 10;
      n = parseInt(n / 10);
    }
    if (n > 0) sum += n;
    arr[sum] += 1;
  }
  console.log(
    arr
      .map((x, i) => {
        if (i > 0 && x === 0) return i;
        else return "-";
      })
      .filter((x) => x !== "-")
      .join("\n")
  );
  process.exit();
});
