/*
https://www.acmicpc.net/problem/1213
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
  const str = input
    .shift()
    .split("")
    .sort((a, b) => a.localeCompare(b))
    .join("");
  const map = new Map();
  let odd = 0;
  let ans = "";
  for (const c of str) {
    map.set(c, map.get(c) + 1 || 1);
  }
  for (const [k, v] of map) {
    if (v % 2 !== 0) odd += 1;
    if (odd >= 2) break;
    const len = ans.length;
    if (len % 2 === 0) {
      ans = `${ans.slice(0, Math.floor(len / 2))}${k.repeat(v)}${ans.slice(
        Math.floor(len / 2)
      )}`;
    } else {
      ans = `${ans.slice(0, Math.floor(len / 2))}${k.repeat(v / 2)}${ans.slice(
        len / 2,
        len / 2 + 1
      )}${k.repeat(v / 2)}${ans.slice(len / 2 + 1, len)}`;
    }
  }
  if (odd >= 2) {
    console.log("I'm Sorry Hansoo");
  } else {
    console.log(ans);
  }
  process.exit();
});
