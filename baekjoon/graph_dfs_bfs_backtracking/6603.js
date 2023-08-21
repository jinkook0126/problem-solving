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
  input.pop();
  const cnt = input.length;
  const ans = [];
  for (let z = 0; z < cnt; z++) {
    const arr = input[z];
    const N = arr.shift();
    const tmp = Array(6).fill(0);
    const visit = Array(N).fill(0);
    const section = [];
    arr.sort((a, b) => a - b);
    const DFS = (L) => {
      if (L === 6) {
        section.push(tmp.slice().join(" "));
      } else {
        for (let i = 0; i < arr.length; i++) {
          if (visit[i] === 0) {
            if (L !== 0 && tmp[L - 1] > arr[i]) {
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
    ans.push(section.join("\n"));
  }
  console.log(ans.join("\n\n"));
  process.exit();
});
