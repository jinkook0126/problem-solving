/*
https://www.acmicpc.net/problem/20310
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
  const arr = input[0].split("");
  let map = new Map();
  for (const c of arr) {
    map.set(c, map.get(c) + 1 || 1);
  }
  map.set("1", map.get("1") / 2);
  map.set("0", map.get("0") / 2);
  for (let i = 0; i < arr.length; i++) {
    if (map.get("1") > 0 && arr[i] === "1") {
      map.set("1", map.get("1") - 1);
      arr[i] = "";
    }
  }
  for (let i = arr.length; i >= 0; i--) {
    if (map.get("0") > 0 && arr[i] === "0") {
      map.set("0", map.get("0") - 1);
      arr[i] = "";
    }
  }
  console.log(arr.join(""));
  process.exit();
});
