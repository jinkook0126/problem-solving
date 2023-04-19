/*
https://www.acmicpc.net/problem/1343

비고
그리디 알고리즘으로 풀기 위해 돌아왔지만, 
정규식을 이용해 풀면 간단한 풀이가 된다.
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
  let ans = "";
  let chk = true;
  const str = input[0];
  let stack = [];

  for (let c of str) {
    if (c !== ".") {
      stack.push(c);
    } else {
      let len = stack.length;
      if (len >= 4) {
        ans += `${"AAAA".repeat(parseInt(len / 4))}`;
        len %= 4;
      }
      if (len >= 2) {
        ans += `${"BB".repeat(parseInt(len / 2))}`;
        len %= 2;
      }
      if (len !== 0) {
        chk = false;
      }
      ans += ".";
      stack = [];
    }
  }
  if (stack.length !== 0) {
    let len = stack.length;
    if (len >= 4) {
      ans += `${"AAAA".repeat(parseInt(len / 4))}`;
      len %= 4;
    }
    if (len >= 2) {
      ans += `${"BB".repeat(parseInt(len / 2))}`;
      len %= 2;
    }
    if (len !== 0) {
      chk = false;
    }
  }
  if (!chk) {
    console.log(-1);
  } else {
    console.log(ans);
  }

  process.exit();
});
