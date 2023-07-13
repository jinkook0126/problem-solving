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
  const arr = input
    .shift()
    .split(" ")
    .map((x) => +x);
  let ang = 0;
  let curr = arr[0];
  let ans = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < curr) {
      ang += 1;
      ans = Math.max(ang, ans);
    } else {
      curr = arr[i];
      ans = Math.max(ang, ans);
      ang = 0;
    }
  }
  console.log(ans);
  process.exit();
});
