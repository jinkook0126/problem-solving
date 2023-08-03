const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const arr = input.shift().split("");
  let select = arr[0];
  const map = new Map();
  map.set("0", 0);
  map.set("1", 0);
  map.set(select, map.get(select) + 1);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== select) {
      select = arr[i];
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }
  console.log(Math.min(...Array.from(map).map((x) => x[1])));
  process.exit();
});
