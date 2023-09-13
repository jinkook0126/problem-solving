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
  const [A, B] = input.shift();
  const arr = String(A).split("");
  const visit = Array(arr.length).fill(0);
  const tmp = Array(arr.length);
  let ans = -1;
  const DFS = (L) => {
    if (L === arr.length) {
      if (tmp[0] === "0") {
        return;
      }
      const num = parseInt(tmp.slice().join(""));
      if (num > B) {
        return;
      }
      ans = Math.max(ans, num);
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (visit[i] === 0) {
          visit[i] = 1;
          tmp[L] = arr[i];
          DFS(L + 1);
          visit[i] = 0;
        }
      }
    }
  };
  DFS(0);
  console.log(ans);
  process.exit();
});

// 1234 3456
// 3421
