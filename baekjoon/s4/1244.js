/*
https://www.acmicpc.net/problem/1244
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const n = parseInt(input[0]);
  const lamp = input[1].split(" ").map((x) => +x);
  lamp.unshift(-1);
  const m = parseInt(input[2]);
  for (let i = 3; i < 3 + m; i++) {
    const [gender, num] = input[i].split(" ").map((x) => +x);
    if (gender === 1) {
      for (let j = num; j <= n; j++) {
        if (j % num === 0) lamp[j] = Math.abs(lamp[j] - 1);
      }
    } else {
      lamp[num] = Math.abs(lamp[num] - 1);
      let lt = num - 1;
      let rt = num + 1;
      while (lt >= 1 && rt <= n) {
        if (lamp[lt] === lamp[rt]) {
          lamp[lt] = Math.abs(lamp[lt] - 1);
          lamp[rt] = Math.abs(lamp[rt] - 1);
          lt -= 1;
          rt += 1;
        } else {
          break;
        }
      }
    }
  }
  lamp.shift();
  const ans = [];
  while (lamp.length) {
    ans.push(lamp.splice(0, 20).join(" "));
  }
  console.log(ans.join("\n"));
  process.exit();
});
