/*
G: 문자열 폭발
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
  let str = input[0];
  const boom = input[1];
  const boomLen = boom.length;
  // const boomEnd = boom.charAt(boom.length - 1);
  const stack = [];
  const tmp = [];
  for (const c of str) {
    if (tmp.length === boomLen) {
      if (tmp.join("") === boom) {
      }
    } else {
      tmp.push(c);
    }
  }
  console.log(stack.join("") || "FRULA");
  process.exit();
});
