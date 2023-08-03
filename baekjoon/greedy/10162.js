const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line.trim()));
}).on("close", function () {
  let T = input.shift();
  const btn = [300, 60, 10];
  const ans = [0, 0, 0];
  btn.forEach((x, i) => {
    if (T >= x) {
      ans[i] = parseInt(T / x);
      T = T % x;
    }
  });
  console.log(T === 0 ? ans.join(" ") : -1);
  process.exit();
});
