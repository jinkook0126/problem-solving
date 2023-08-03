const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  let T = parseInt(input.shift());
  const ans = [];
  while (T) {
    const N = parseInt(input.shift());
    const arr = input.splice(0, N).map((x) => x.split(" ").map((y) => +y));
    arr.sort((a, b) => a[0] - b[0]);
    let cnt = 1;
    let min = arr[0][1];
    for (let i = 1; i < arr.length; i++) {
      const curr = arr[i][1];
      if (curr < min) {
        min = curr;
        cnt += 1;
      }
    }
    ans.push(cnt);
    T -= 1;
  }
  console.log(ans.join("\n"));
  process.exit();
});
