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
  const ans = input.map((x) =>
    x
      .split(" ")
      .map((y) => y.split("").reverse().join(""))
      .join(" ")
  );
  console.log(ans.join("\n"));
  process.exit();
});
