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
  const ans = [];
  input.pop();
  input.forEach((x) => {
    let cnt = 0;
    for (let i = 0; i < x.length - 1; i++) {
      if (x.includes(x[i] * 2)) {
        cnt += 1;
      }
    }
    ans.push(cnt);
  });
  console.log(ans.join("\n"));
  process.exit();
});
// 1 4 3 2 9 7 18 22 0
// 2 4 8 10 0
// 7 5 11 13 1 3 0
// -1

// 3
// 2
// 0
