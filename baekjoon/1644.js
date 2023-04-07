/*
https://www.acmicpc.net/problem/1644

문제
하나 이상의 연속된 소수의 합으로 나타낼 수 있는 자연수들이 있다. 몇 가지 자연수의 예를 들어 보면 다음과 같다.

  3 : 3 (한 가지)
  41 : 2+3+5+7+11+13 = 11+13+17 = 41 (세 가지)
  53 : 5+7+11+13+17 = 53 (두 가지)

하지만 연속된 소수의 합으로 나타낼 수 없는 자연수들도 있는데, 20이 그 예이다. 
7+13을 계산하면 20이 되기는 하나 7과 13이 연속이 아니기에 적합한 표현이 아니다. 
또한 한 소수는 반드시 한 번만 덧셈에 사용될 수 있기 때문에, 3+5+5+7과 같은 표현도 적합하지 않다.

자연수가 주어졌을 때, 이 자연수를 연속된 소수의 합으로 나타낼 수 있는 경우의 수를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 자연수 N이 주어진다. (1 ≤ N ≤ 4,000,000)

출력
첫째 줄에 자연수 N을 연속된 소수의 합으로 나타낼 수 있는 경우의 수를 출력한다.

비고
소수의 목록은 에라토스테네스의 체를 이용하여 추출
합이 되는 경우는 투포인터를 사용하여 구현
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
  const N = input.pop();
  const getPrimeList = (n) => {
    const arr = new Array(n + 1).fill().map((_, i) => i);
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] === 0) continue;
      for (let j = i * 2; j < arr.length; j += i) {
        arr[j] = 0;
      }
    }
    return arr.filter((x) => x !== 0 && x !== 1);
  };
  const list = getPrimeList(N);
  let sum = 0;
  let cnt = 0;
  let left = 0;
  for (let right = 0; right < list.length; right++) {
    sum += list[right];
    if (sum === N) {
      cnt++;
    }
    while (sum >= N) {
      sum -= list[left++];
      if (sum === N) {
        cnt++;
      }
    }
  }
  console.log(cnt);
  process.exit();
});
