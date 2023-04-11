/*
https://www.acmicpc.net/problem/15829

문제
본문 참고

입력
첫 줄에는 문자열의 길이 L이 들어온다. 둘째 줄에는 영문 소문자로만 이루어진 문자열이 들어온다.
입력으로 주어지는 문자열은 모두 알파벳 소문자로만 구성되어 있다.

출력
문제에서 주어진 해시함수와 입력으로 주어진 문자열을 사용해 계산한 해시 값을 정수로 출력한다.

비고
우선 문제에 따른 구현은 어렵지 않았는데 50점 뿐이 나오지 않았다. 
큰 수에 대해서 값을 내지 못하고 있는 것 같았다.
문제 설명 중 '유한한 범위의 출력을 가져야 한다고 했으니까 적당히 큰 수 M으로 나눠주자'
가 값이 커질 것 같은 부분마다 mod 연산 해주라는 뜻인지 아직 잘 이해가 안간다. 
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
  const N = input.shift();
  const M = 1234567891;
  const str = input.shift();
  let sum = 0;
  let r = 1;
  const alphabet = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  str.split("").forEach((c, i) => {
    sum += alphabet[c] * r;
    sum %= M;
    r *= 31;
    r %= M;
  });
  console.log(Number(sum));
  process.exit();
});
