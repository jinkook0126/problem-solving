/*
https://www.acmicpc.net/problem/10870

문제
피보나치 수는 0과 1로 시작한다. 0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1이다. 
그 다음 2번째 부터는 바로 앞 두 피보나치 수의 합이 된다.
이를 식으로 써보면 Fn = Fn-1 + Fn-2 (n ≥ 2)가 된다.
n=17일때 까지 피보나치 수를 써보면 다음과 같다.
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597
n이 주어졌을 때, n번째 피보나치 수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 n이 주어진다. n은 20보다 작거나 같은 자연수 또는 0이다.

출력
첫째 줄에 n번째 피보나치 수를 출력한다.

비고
배열을 사용하지 않고 풀고 싶었는데 마땅한 방법이 한 번에 떠오르지 않았다.
function fibonacci(n) {
    if (n == 0) return 0;
    else if (n == 1) return 1;
    else return fibonacci(n-1) + fibonacci(n-2);
}
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
  const [num] = input;
  const arr = [0, 1];
  let res = 0;
  const DFS = (L) => {
    if (L === num) {
      res = arr[L - 1] + arr[L - 2];
    } else {
      arr[L] = arr[L - 1] + arr[L - 2];
      DFS(L + 1);
    }
  };
  if (num < 2) {
    console.log(num);
  } else {
    DFS(2);
    console.log(res);
  }

  process.exit();
});
