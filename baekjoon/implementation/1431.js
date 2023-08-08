const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const N = input.shift();
  input.sort((a, b) => {
    if (a.length === b.length) {
      let aSum = 0;
      let bSum = 0;
      a.split("").forEach((x) => {
        if (/[0-9]/g.test(x)) {
          aSum += parseInt(x);
        }
      });
      b.split("").forEach((x) => {
        if (/[0-9]/g.test(x)) {
          bSum += parseInt(x);
        }
      });
      if (aSum === bSum) {
        return a.localeCompare(b);
      } else {
        return aSum - bSum;
      }
    } else {
      return a.length - b.length;
    }
  });
  console.log(input.join("\n"));
  process.exit();
});
