const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line.trim()));
}).on("close", function () {
  const ex = Array(2).fill(0);
  let flag = true;
  for (let i = 0; i < 8; i++) {
    if (!flag) break;
    ex[0] = i;
    for (let j = i + 1; j < 9; j++) {
      if (!flag) break;
      ex[1] = j;
      let sum = 0;
      for (let k = 0; k < 9; k++) {
        if (!ex.includes(k)) {
          sum += input[k];
        }
      }
      if (sum === 100) flag = false;
    }
  }
  console.log(input.filter((x, i) => !ex.includes(i)).join("\n"));
  process.exit();
});
// 7
// 8
// 10
// 13
// 15
// 19
// 20
// 23
// 25
