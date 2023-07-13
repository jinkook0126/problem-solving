const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const N = parseInt(input[0]);
  const info = input[1];
  const filterInfo = info.replace(/S/g, "_").split("");
  const single = filterInfo.filter((x) => x === "_").length;
  const couple = filterInfo.filter((x) => x !== "_").length / 2;
  const coupleP = couple * 2;
  const total = single + couple + 1;

  if (total >= single + coupleP) {
    console.log(single + coupleP);
  } else {
    console.log(total);
  }
  process.exit();
});
