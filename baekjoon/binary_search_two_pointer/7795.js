/*
S3
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  let T = parseInt(input.shift());
  let z = 0;
  const ans = [];
  while (T > 0) {
    const [N, M] = input[z++].split(" ").map((x) => +x);
    const A = input[z++].split(" ").map((x) => +x);
    const B = input[z++].split(" ").map((x) => +x);
    A.sort((a, b) => b - a);
    B.sort((a, b) => b - a);
    let cnt = 0;
    let i = 0;
    let j = 0;
    while (i < N && j < M) {
      if (A[i] > B[j]) {
        cnt += M - j;
        i += 1;
      } else {
        j += 1;
      }
    }
    ans.push(cnt);
    T -= 1;
  }
  console.log(ans.join("\n"));
  process.exit();
});
