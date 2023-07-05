/*
11728 twopointer S5
 */
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
  const A = input.shift();
  const B = input.shift();
  const C = [];
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  while (i < N && j < M) {
    if (A[i] > B[j]) {
      C.push(B[j]);
      j += 1;
    } else {
      C.push(A[i]);
      i += 1;
    }
  }
  if (i < N) {
    C.push(...A.splice(i, N));
  }
  if (j < M) {
    C.push(...B.splice(j, M));
  }
  console.log(C.join(" "));
  process.exit();
});
