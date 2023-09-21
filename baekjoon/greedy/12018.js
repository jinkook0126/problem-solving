const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(
    line
      .trim()
      .split(" ")
      .map((x) => +x)
  );
}).on("close", function () {
  let [n, m] = input.shift();
  const arr = [];
  let cnt = 0;
  for (let i = 0; i < input.length; i += 2) {
    const p = input[i];
    const l = input[i + 1];
    if (p[0] < p[1]) {
      arr.push(1);
    } else {
      l.sort((a, b) => b - a);
      const tmp = l.slice(0, p[1]);
      arr.push(tmp.at(-1));
    }
  }
  arr.sort((a, b) => a - b);
  arr.forEach((x) => {
    if (m >= x) {
      cnt += 1;
      m -= x;
    }
  });
  console.log(cnt);
  process.exit();
});
// 5 76
// 5 4
// 36 25 1 36 36
// 4 4
// 30 24 25 20
// 6 4
// 36 36 36 36 36 36
// 2 4
// 3 7
// 5 4
// 27 15 26 8 14

// 4
