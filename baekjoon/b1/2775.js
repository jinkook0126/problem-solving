/*
https://www.acmicpc.net/problem/2775

비고
운이 좋았다. 이 문제의 풀이는 점화식을 통해 규칙을 찾아 풀었어야 하는 문제인데
나는 문제의 설명을 구현해 버렸다. 만약 테스트케이스가 컸다면 시간초과 났을 것이다.
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line.trim()));
}).on("close", function () {
  const N = input.shift();
  const ans = [];
  for (let i = 0; i < input.length; i += 2) {
    const k = input[i];
    const n = input[i + 1];
    const arr = [];
    for (let j = 0; j <= k; j++) {
      const tmp = [];
      for (let m = 1; m <= n; m++) {
        if (j === 0) {
          tmp.push(m);
        } else {
          tmp.push(
            [...arr[j - 1]].slice(0, m).reduce((prev, curr) => prev + curr, 0)
          );
        }
      }
      arr.push(tmp);
    }
    ans.push(arr[k][n - 1]);
  }
  console.log(ans.join("\n"));
  process.exit();
});
