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
  const ch = Array(N).fill(0);
  const tmp = Array(M);
  const ans = [];
  const set = new Set();
  arr.sort((a, b) => a - b);
  const DFS = (L, S) => {
    if (L === M) {
      const str = tmp.slice().join(" ");
      if (!set.has(str)) {
        set.add(str);
        ans.push(str);
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (ch[i] === 0 && arr[i] >= S) {
          ch[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1, arr[i]);
          ch[i] = 0;
        }
      }
    }
  };
  DFS(0, 0);
  console.log(ans.join("\n"));
  process.exit();
});
