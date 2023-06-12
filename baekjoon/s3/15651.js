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
  const [N, M] = input.shift();
  const tmp = Array(M);
  const ans = [];
  const DFS = (L) => {
    if (L === M) {
      ans.push(tmp.slice().join(" "));
    } else {
      for (let i = 1; i <= N; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  };
  DFS(0);
  console.log(ans.join("\n"));
  process.exit();
});
