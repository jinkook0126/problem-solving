const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [N, Q] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const ducks = input.map((x) => +x);
  const ch = Array(N + 1).fill(0);
  const ans = [];
  for (let i = 0; i < ducks.length; i++) {
    let duck = ducks[i];
    let flag = true;
    while (duck >= 1) {
      if (ch[duck] === 0) {
        duck = parseInt(duck / 2);
      } else {
        flag = false;
        break;
      }
    }
    if (flag) {
      ch[ducks[i]] = 1;
      ans.push(0);
    } else {
      ans.push(duck);
    }
  }
  console.log(ans.join("\n"));
  process.exit();
});
