// S3
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
  const route = input
    .shift()
    .split(" ")
    .map((x) => BigInt(x));
  const city = input
    .shift()
    .split(" ")
    .map((x) => BigInt(x));
  let oil = city[0];
  let sum = oil * route[0];
  for (let i = 1; i < city.length - 1; i++) {
    if (oil > city[i]) {
      oil = city[i];
    }
    sum += oil * route[i];
  }
  console.log(sum.toString());
  process.exit();
});
