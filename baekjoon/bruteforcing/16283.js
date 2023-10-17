const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(
    line
      .trim()
      .split(" ")
      .map((x) => +x)
  );
}).on("close", function () {
  const [a, b, n, w] = input.shift();
  let cnt = 0;
  let ans = [];
  for (let i = 1; i < n; i++) {
    const sheep = a * i;
    const goat = b * (n - i);
    if (sheep + goat === w) {
      cnt += 1;
      ans.push(i, n - i);
    }
  }
  if (cnt === 1) {
    console.log(ans.join(" "));
  } else {
    console.log(-1);
  }
  process.exit();
});
// 3 4 9 32
