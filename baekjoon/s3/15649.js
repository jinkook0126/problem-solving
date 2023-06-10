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
  const ch = Array(N + 1).fill(0);
  const tmp = Array(M);
  const ans = [];
  const DFS = (L) => {
    if (L === M) {
      ans.push(tmp.join(" "));
    } else {
      for (let i = 1; i <= N; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = i;
          DFS(L + 1);
          ch[i] = 0;
        }
      }
    }
  };

  DFS(0);
  console.log(ans.join("\n"));
  process.exit();
});
