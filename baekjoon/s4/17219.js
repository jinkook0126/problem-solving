/*
https://www.acmicpc.net/problem/17219
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
  const [N, M] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const map = new Map();
  for (let i = 0; i < N; i++) {
    const [site, pw] = input[i].split(" ");
    map.set(site, pw);
  }
  const ans = [];
  for (let i = N; i < input.length; i++) {
    ans.push(map.get(input[i]));
  }
  console.log(ans.join("\n"));
  process.exit();
});
