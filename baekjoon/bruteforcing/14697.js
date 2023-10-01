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
  const [A, B, C, N] = input.shift();
  const arr = [A, B, C];
  let ans = 0;
  for (let i = 0; i <= parseInt(N / A); i++) {
    for (let j = 0; j <= parseInt(N / B); j++) {
      for (let k = 0; k <= parseInt(N / C); k++) {
        if (A * i + B * j + C * k === N) {
          ans = 1;
        }
      }
    }
  }
  console.log(ans);
  process.exit();
});
