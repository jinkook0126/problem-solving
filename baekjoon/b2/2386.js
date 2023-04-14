/*
https://www.acmicpc.net/problem/2386

map을 통해 반복문을 돌리는 풀이가 정답일 수 있겠다만,
key값으로 문자열을 쪼개서 셀 수 있다는 트릭으로도 풀어봤다.
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
  const res = [];
  input.pop();
  input.forEach((x) => {
    const a = x[0];
    const arr = x.toUpperCase().split("");
    const k = arr.shift();
    res.push(`${a} ${arr.join().trim().split(k).length - 1}`);
  });
  console.log(res.join("\n"));
  process.exit();
});
