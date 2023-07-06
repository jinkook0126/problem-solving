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
  const M = parseInt(input.shift());
  const left = arr;
  const right = [];
  input.forEach((x) => {
    const [cmd, text] = x.split(" ");
    if (cmd === "L") {
      if (left.length) {
        right.push(left.pop());
      }
    } else if (cmd === "D") {
      if (right.length) {
        left.push(right.pop());
      }
    } else if (cmd === "B") {
      left.pop();
    } else {
      left.push(text);
    }
  });
  console.log([...left, ...right.reverse()].join(""));
  process.exit();
});
