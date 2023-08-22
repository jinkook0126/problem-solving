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
  let [N, M] = input.shift();
  let ans = [];
  const pack = Math.min(...input.map((x) => x[0]));
  const each = Math.min(...input.map((x) => x[1]));
  ans.push(each * N);
  ans.push((parseInt(N / 6) + 1) * pack);
  ans.push(parseInt(N / 6) * pack + (N % 6) * each);
  console.log(Math.min(...ans));
  process.exit();
});
