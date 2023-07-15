const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const arr = input.map((x) => x.split(""));
  const ans = [];
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j][i]) ans.push(arr[j][i]);
    }
  }
  console.log(ans.join(""));
  process.exit();
});
``;
