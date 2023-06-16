/*
S4
*/
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
  const [N, K] = input.shift();
  const ans = [];
  const arr = Array(N)
    .fill()
    .map((_, i) => i + 1);
  let pos = 1;
  while (arr.length) {
    if (pos === K) {
      ans.push(arr.shift());
      pos = 1;
    } else {
      arr.push(arr.shift());
      pos += 1;
    }
  }
  console.log(`<${ans.join(", ")}>`);
  process.exit();
});
