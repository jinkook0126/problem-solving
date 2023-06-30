/*
S5
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
  const arr = input.shift().split("");
  const map = new Map();
  for (const c of arr) {
    if (c === "6" || c === "9") {
      map.set("69", map.get("69") + 1 || 1);
    } else {
      map.set(c, map.get(c) + 1 || 1);
    }
  }
  const tmp = map.get("69");
  if (tmp) {
    map.set("69", Math.ceil(tmp / 2));
  }
  console.log(Math.max(...Array.from(map).map((x) => x[1])));
  process.exit();
});
