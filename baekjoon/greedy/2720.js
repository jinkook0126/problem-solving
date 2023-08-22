const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line.trim()));
}).on("close", function () {
  const N = input.shift();
  const exchange = [0.25, 0.1, 0.05, 0.01];
  const ans = [];
  for (let i = 0; i < N; i++) {
    let cent = parseFloat(input[i] / 100);
    const tmp = [];
    for (let j = 0; j < 4; j++) {
      if (cent >= exchange[j]) {
        tmp.push(parseInt(cent / exchange[j]));
        cent = parseFloat((cent % exchange[j]).toFixed(2));
      } else {
        tmp.push(0);
      }
    }
    ans.push(tmp.join(" "));
  }
  console.log(ans.join("\n"));
  process.exit();
});
