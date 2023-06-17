const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line.trim()));
}).on("close", function () {
  const N = input.shift();
  const ans = [];
  const visit = Array(N + 1).fill(0);
  const tmp = Array(N).fill(0);
  const DFS = (L) => {
    if (L === N) {
      ans.push(tmp.slice().join(" "));
    } else {
      for (let i = 1; i <= N; i++) {
        if (visit[i] === 0) {
          visit[i] = 1;
          tmp[L] = i;
          DFS(L + 1);
          visit[i] = 0;
        }
      }
    }
  };
  DFS(0);
  console.log(ans.join("\n"));
  process.exit();
});
