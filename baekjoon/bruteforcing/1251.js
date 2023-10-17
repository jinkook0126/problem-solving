const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const str = input.shift().split("");
  const ans = [];
  for (let i = 1; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      const pre = str.slice(0, i).reverse();
      const mid = str.slice(i, j).reverse();
      const post = str.slice(j).reverse();
      ans.push([...pre, ...mid, ...post].join(""));
    }
  }
  console.log(ans.sort((a, b) => a.localeCompare(b))[0]);
  process.exit();
});
