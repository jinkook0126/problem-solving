/*
S4 : 베스트셀러
*/
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
  const map = new Map();
  input.forEach((title) => {
    map.set(title, map.get(title) + 1 || 1);
  });
  const arr = Array.from(map);
  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0].localeCompare(b[0]);
    } else {
      return b[1] - a[1];
    }
  });
  console.log(arr[0][0]);
  process.exit();
});
