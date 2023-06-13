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
  const [N, M] = input[0];
  const arr = input[1];
  const ans = [];
  const tmp = Array(M);
  const set = new Set();
  arr.sort((a, b) => a - b);
  const DFS = (L) => {
    if (L === M) {
      const str = tmp.slice().join(" ");
      if (!set.has(str)) {
        set.add(str);
        ans.push(str);
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        tmp[L] = arr[i];
        DFS(L + 1);
      }
    }
  };
  DFS(0);
  console.log(ans.join("\n"));
  process.exit();
});
