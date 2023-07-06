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
  const stack = [];
  let flag = false;
  let ans = 0;
  arr.forEach((x) => {
    if (x === "(") {
      flag = true;
      stack.push(x);
    } else {
      stack.pop();
      if (flag) {
        ans += stack.length;
      } else {
        ans += 1;
      }
      flag = false;
    }
  });
  console.log(ans);
  process.exit();
});
