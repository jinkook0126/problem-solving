/*
https://www.acmicpc.net/problem/17413
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
  let stack = [];
  let str = [];
  let ans = "";
  for (const c of input[0]) {
    if (c === "<") {
      if (str.length !== 0) {
        ans += str.reverse().join("");
        str = [];
      }
      stack.push(c);
    } else if (c === ">") {
      stack.push(c);
      ans += stack.join("");
      stack = [];
    } else {
      if (stack[0] === "<") {
        stack.push(c);
      } else {
        if (c === " ") {
          ans += str.reverse().join("") + " ";
          str = [];
        } else {
          str.push(c);
        }
      }
    }
  }
  if (str.length !== 0) ans += str.reverse().join("");
  console.log(ans);

  process.exit();
});
