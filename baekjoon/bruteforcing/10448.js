const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  const N = input.shift();
  const arr = Array(46)
    .fill()
    .map((_, i) => parseInt((i * (i + 1)) / 2));
  const ans = [];
  input.forEach((x) => {
    let isEureka = false;
    for (let i = 1; i < arr.length; i++) {
      if (isEureka) break;
      for (let j = 1; j < arr.length; j++) {
        if (isEureka) break;
        for (let k = 1; k < arr.length; k++) {
          if (arr[i] + arr[j] + arr[k] === x) {
            isEureka = true;
            break;
          }
        }
      }
    }
    ans.push(isEureka ? 1 : 0);
  });
  console.log(ans.join("\n"));
  process.exit();
});
