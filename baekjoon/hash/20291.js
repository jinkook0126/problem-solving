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
  const map = new Map();
  for (let i = 0; i < N; i++) {
    const [name, ext] = input[i].split(".");
    map.set(ext, map.get(ext) + 1 || 1);
  }
  const ans = Array.from(map);
  ans.sort((a, b) => a[0].localeCompare(b[0]));
  console.log(ans.map((row) => row.join(" ")).join("\n"));
});
