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
    let cnt = 0;
    let [J, N] = input
      .shift()
      .split(" ")
      .map((x) => +x);
    const arr = input
      .splice(0, N)
      .map((x) => x.split(" ").map((z) => +z))
      .map((x) => {
        const [a, b] = x;
        return a * b;
      });
    arr.sort((a, b) => b - a);
    for (let i = 0; i < arr.length; i++) {
      J -= arr[i];
      cnt += 1;
      if (J <= 0) break;
    }
    ans.push(cnt);
    T -= 1;
  }
  console.log(ans.join("\n"));
  process.exit();
});
