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
  const pattern = input.shift().split("*");
  const res = [];
  input.forEach((x) => {
    if (x.length < pattern[0].length + pattern[1].length) {
      res.push("NE");
    } else if (x.startsWith(pattern[0]) && x.endsWith(pattern[1])) {
      res.push("DA");
    } else {
      res.push("NE");
    }
  });
  console.log(res.join("\n"));
  process.exit();
});
