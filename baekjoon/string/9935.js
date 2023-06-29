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
  const boomLen = boom.length - 1;
  const boomEnd = boom.charAt(boom.length - 1);
  const stack = [];
  for (const c of str) {
    if (c !== boomEnd) {
      stack.push(c);
    } else {
      const tmp = stack
        .join("")
        .substring(stack.length - boom.length + 1, stack.length);
      if (`${tmp}${c}` === boom) {
        for (let i = 0; i < boomLen; i++) {
          stack.pop();
        }
      } else {
        stack.push(c);
      }
    }
  }
  console.log(stack.join("") || "FRULA");
  process.exit();
});
