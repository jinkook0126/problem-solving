const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const N = parseInt(input.shift());
  const stack = [];
  let ans = 0;
  input.forEach((sub) => {
    const [cmd, score, min] = sub.split(" ").map((x) => +x);
    if (cmd === 0) {
      if (stack.length) {
        const curr = stack.at(-1);
        if (curr[1] - 1 === 0) {
          ans += curr[0];
          stack.pop();
        } else {
          stack[stack.length - 1] = [curr[0], curr[1] - 1];
        }
      }
    } else {
      if (min - 1 === 0) {
        ans += score;
      } else {
        stack.push([score, min - 1]);
      }
    }
  });
  console.log(ans);
  process.exit();
});
