/*
S2
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
  const [N, M] = input[0];
  const arr = input[1];
  let lt = 0;
  let rt = Math.max(...arr);
  let ans = 0;
  while (lt <= rt) {
    const mid = parseInt((lt + rt) / 2);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > mid) {
        sum += arr[i] - mid;
      }
    }
    if (sum >= M) {
      ans = Math.max(ans, mid);
      lt = mid + 1;
    } else if (sum < M) {
      rt = mid - 1;
    }
  }
  console.log(ans);
  process.exit();
});
