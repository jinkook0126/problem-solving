const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const N = parseInt(input.shift());
  const M = parseInt(input.shift());
  const arr = input
    .shift()
    .split(" ")
    .map((x) => +x);
  let ans = [];
  const map = new Map();
  arr.forEach((x) => {
    if (ans.length < N) {
      if (map.has(x)) {
        map.set(x, map.get(x) + 1);
      } else {
        map.set(x, 1);
        ans.push(x);
      }
    } else {
      if (map.has(x)) {
        map.set(x, map.get(x) + 1);
      } else {
        let minCount = 100000;
        let minValue = -1;
        for (let i = 0; i < ans.length; i++) {
          const t = map.get(ans[i]);
          if (t < minCount) {
            minCount = t;
            minValue = ans[i];
          }
        }
        ans = ans.filter((v) => v !== minValue);
        map.delete(minValue);
        ans.push(x);
        map.set(x, 1);
      }
    }
  });
  ans.sort((a, b) => a - b);
  console.log(ans.join(" "));

  process.exit();
});
