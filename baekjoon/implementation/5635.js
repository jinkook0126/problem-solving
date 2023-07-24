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
  const arr = input.map((x) => x.split(" "));
  arr.sort((a, b) => {
    if (a[3] === b[3]) {
      if (a[2] === b[2]) {
        return parseInt(a[1]) - parseInt(b[1]);
      } else {
        return parseInt(a[2]) - parseInt(b[2]);
      }
    } else {
      return parseInt(a[3]) - parseInt(b[3]);
    }
  });
  console.log([arr.at(-1)[0], arr[0][0]].join("\n"));
  process.exit();
});
