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
  const [a, b] = input.shift();
  let min = Infinity;
  const DFS = (s, cnt) => {
    if (s > b) return;
    if (s === b) {
      min = Math.min(cnt, min);
    } else {
      DFS(s * 2, cnt + 1);
      DFS(parseInt(`${s}1`), cnt + 1);
    }
  };
  DFS(a, 0);
  console.log(min === Infinity ? -1 : min + 1);
  process.exit();
});
