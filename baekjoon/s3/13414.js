const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [K, L] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  let num = 0;
  const map = new Map();
  for (let i = 0; i < input.length; i++) {
    map.set(input[i], ++num);
  }
  const arr = Array.from(map);
  arr.sort((a, b) => a[1] - b[1]);

  console.log(
    arr
      .map((x) => x[0])
      .splice(0, K)
      .join("\n")
  );
  process.exit();
});
