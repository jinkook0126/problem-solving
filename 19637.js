const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [N, M] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const level = input.splice(0, N).map((x) => x.split(" "));
  level.sort((a, b) => a[1] - b[1]);
  const ans = [];
  for (let i = 0; i < input.length; i++) {
    const power = parseInt(input[i]);
    for (let j = 0; j < level.length; j++) {
      let [nm, standard] = level[j];
      standard = parseInt(standard);
      if (standard >= power) {
        ans.push(nm);
        break;
      }
    }
  }
  console.log(ans.join("\n"));
  process.exit();
});
// 3 8
// WEAK 10000
// NORMAL 100000
// STRONG 1000000
// 0
// 9999
// 10000
// 10001
// 50000
// 100000
// 500000
// 1000000
