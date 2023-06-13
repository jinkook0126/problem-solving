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
  const arr = input
    .shift()
    .split(" ")
    .map((x) => +x);
  arr.sort((a, b) => a - b);
  const ch = Array(N).fill(0);
  const ans = [];
  const tmp = Array(M);
  const set = new Set();
  const DFS = (L) => {
    if (L === M) {
      const str = tmp.slice().join(" ");
      if (!set.has(str)) {
        set.add(str);
        ans.push(str);
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          tmp[L] = arr[i];
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
