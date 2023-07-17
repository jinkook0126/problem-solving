const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [N, M] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  let dna = [];
  let min = 0;
  const arr = input.map((x) => x.split(""));
  const ans = [];
  for (let i = 0; i < M; i++) {
    const map = new Map();
    for (let j = 0; j < N; j++) {
      map.set(arr[j][i], map.get(arr[j][i]) + 1 || 1);
    }
    const tmp = Array.from(map);
    tmp.sort((a, b) => {
      if (a[1] === b[1]) {
        return a[0].localeCompare(b[0]);
      } else {
        return b[1] - a[1];
      }
    });
    dna.push(tmp[0][0]);
    const total = tmp.map((x) => x[1]).reduce((acc, prev) => acc + prev, 0);
    min += total - tmp[0][1];
  }

  console.log([dna.join(""), min].join("\n"));
  process.exit();
});
