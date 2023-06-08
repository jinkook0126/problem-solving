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
  const [A, B, V] = input.shift();
  const distance = A - B;
  const height = V - B;
  const days = parseInt(height / distance);
  const mod = height % distance;
  console.log(mod !== 0 ? days + 1 : days);
  process.exit();
});
