/*
https://www.acmicpc.net/problem/20438

우선 왜 누적합으로 풀어야 하는지 잘 모르겠다.
아마 테스트 수가 크기 때문이겠지...
구간이라는 키워드와 합이 나온다면 누적합을 고민해보자.
https://algorfati.tistory.com/m/139
46번째 줄에 S-1로 해주는 것은 누적합 공식인 것 같다...
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
  const [N, K, Q, M] = input[0];
  const sleeps = input[1];
  const students = input[2].filter((x) => sleeps.indexOf(x) === -1);
  const arr = [0, 0, 0];
  const ans = [];
  for (let i = 3; i < N + 3; i++) {
    arr[i] = arr[i - 1];
    if (sleeps.includes(i)) {
      arr[i] = arr[i - 1] + 1;
      continue;
    }
    let chk = true;
    for (const student of students) {
      if (i % student === 0) {
        chk = false;
        break;
      }
    }
    if (chk) arr[i] = arr[i - 1] + 1;
  }
  for (let i = 3; i < input.length; i++) {
    const [S, E] = input[i];
    ans.push(arr[E] - arr[S - 1]);
  }
  console.log(ans.join("\n"));
  process.exit();
});
