/*
https://www.acmicpc.net/problem/18870

문제
수직선 위에 N개의 좌표 X1, X2, ..., XN이 있다. 이 좌표에 좌표 압축을 적용하려고 한다.
Xi를 좌표 압축한 결과 X'i의 값은 Xi > Xj를 만족하는 서로 다른 좌표의 개수와 같아야 한다.
X1, X2, ..., XN에 좌표 압축을 적용한 결과 X'1, X'2, ..., X'N를 출력해보자.

입력
첫째 줄에 N이 주어진다.
둘째 줄에는 공백 한 칸으로 구분된 X1, X2, ..., XN이 주어진다.

출력
첫째 줄에 X'1, X'2, ..., X'N을 공백 한 칸으로 구분해서 출력한다.

비고
indexOf를 통해 기존 배열의 원소들이 압축된 배열의 몇 번째 인덱스에 있는지 찾아서 출력하게 되면
시간초과가 되므로 압축된 리스트를 만들지 않고, map과 함께 해당 원소의 index를 key로 저장하여 
기존 배열의 원소를 key로 하여 map의 value 값을 조회하여 출력 (value 가 압축된 리스트의 원소값이기 때문)
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
  const [N, list] = input;
  const arr = list.split(" ");
  const map = new Map();
  const res = [];

  [...arr]
    .sort((a, b) => a - b)
    .forEach((x, i) => {
      if (!map.has(x)) map.set(x, map.size);
    });
  arr.forEach((x) => {
    res.push(map.get(x));
  });
  console.log(res.join(" "));
  process.exit();
});
