/*
https://www.acmicpc.net/problem/25501

문제
본문참고

입력
본문참고

출력
각 테스트케이스마다, isPalindrome 함수의 반환값과 recursion 함수의 
호출 횟수를 한 줄에 공백으로 구분하여 출력한다.

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
  const res = [];

  const isPalindrome = (str) => {
    return recursion(str, 0, str.length - 1, 1);
  };
  const recursion = (str, l, r, cnt) => {
    if (l >= r) return [1, cnt];
    else if (str[l] != str[r]) return [0, cnt];
    else return recursion(str, l + 1, r - 1, cnt + 1);
  };
  input.forEach((x) => {
    // const [a, b] = isPalindrome(x);
    // console.log(a, b);
    res.push(isPalindrome(x));
  });
  //   console.log(res.join("\n"));
  console.log(res.map((x) => x.join(" ")).join("\n"));
});
