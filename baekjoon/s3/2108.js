/*
https://www.acmicpc.net/problem/2108
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line.trim()));
}).on("close", function () {
  const N = input.shift();
  const ans = [];
  const no1 = Math.round(
    input.reduce((prev, curr) => prev + curr, 0) / input.length
  );
  ans.push(no1);
  input.sort((a, b) => a - b);
  const no2 = input[Math.floor(input.length / 2)];
  ans.push(no2);
  const map = new Map();
  for (const x of input) {
    map.set(x, map.get(x) + 1 || 1);
  }
  const tmp = [];
  for (const [k, v] of map) {
    tmp.push([k, v]);
  }
  tmp.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return b[1] - a[1];
    }
  });
  if (tmp.length > 1) {
    if (tmp[0][1] === tmp[1][1]) {
      ans.push(tmp[1][0]);
    } else {
      ans.push(tmp[0][0]);
    }
  } else {
    ans.push(tmp[0][0]);
  }

  const no4 = input.at(-1) - input[0];
  ans.push(no4);
  console.log(ans.join("\n"));
  process.exit();
});
