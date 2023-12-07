const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [lv, judge] = input.shift().split(" ");
  if (judge === "miss") {
    console.log(0);
  } else if (judge === "bad") {
    console.log(parseInt(lv) * 200);
  } else if (judge === "cool") {
    console.log(parseInt(lv) * 400);
  } else if (judge === "great") {
    console.log(parseInt(lv) * 600);
  } else {
    console.log(parseInt(lv) * 1000);
  }
  process.exit();
});
