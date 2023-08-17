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
  const arr = input.shift().split(" ");
  arr.sort((a, b) => a.localeCompare(b));
  const visit = Array(M).fill(0);
  const tmp = [];
  const set = new Set();
  const gather = ["a", "e", "i", "o", "u"];
  const DFS = (L) => {
    if (L === N) {
      const str = tmp.slice();
      let count = 0;
      for (let i = 0; i < gather.length; i++) {
        if (str.includes(gather[i])) count += 1;
      }
      if (count >= 1 && str.length - count >= 2) {
        set.add(tmp.slice().join(""));
      }
    } else {
      for (let i = 0; i < M; i++) {
        if (visit[i] === 0) {
          if (L > 0 && tmp[L - 1] > arr[i]) {
            continue;
          }
          visit[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          visit[i] = 0;
        }
      }
    }
  };
  DFS(0);
  const ans = Array.from(set);
  console.log(ans.length);
  console.log(ans.join("\n"));
  process.exit();
});
