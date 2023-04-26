/*
https://www.acmicpc.net/problem/11656
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
  const S = input.shift().split("");
  const arr = [];
  for (let i = 0; i < S.length; i++) {
    arr.push(S.slice().splice(i, S.length).join(""));
  }
  console.log(
    arr
      .sort((a, b) => {
        return a.localeCompare(b);
      })
      .join("\n")
  );
  process.exit();
});
