/*
https://www.acmicpc.net/problem/5430

비고
처음 R을 만났을 때 배열을 뒤집어 줬는데 (심지어 reverse()가 아닌 while을 통해 직접..) 이럴 경우 시간초과가 난다.
후에 R을 체크하여 앞, 뒤에서 숫자를 하나씩 자르면 될 것 같다고 생각 하여 진행.

처음 RR => R 로 만드는 것이 시간을 줄일 수 있을꺼라 판단하여 위에 필터링을 해주었는데
p의 길이가 길 경우 문자열을 모두 탐색해야 하기 때문에 시간초과가 발생하여 제거.

어차피 p를 돌 때 배열을 뒤집지 않아서 복잡도가 올라가지 않아, 굳이 필터링할 필요가 없다. 
뿐만 아니라 p를 필터링 하게 되면 p를 2번 탐색하기 때문에 시간복잡도가 증가한다.
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
  const ans = [];
  for (let i = 0; i < input.length; i += 3) {
    const p = input[i];
    const m = input[i + 1];
    const list = input[i + 2]
      .replace(/\[|]/g, "")
      .split(",")
      .filter((x) => x !== "");
    let chk = true;
    let isReverse = false;
    for (const c of p) {
      if (c === "R") {
        isReverse = !isReverse;
      } else {
        if (isReverse) {
          if (list.pop() === undefined) {
            ans.push("error");
            chk = false;
            break;
          }
        } else {
          if (list.shift() === undefined) {
            ans.push("error");
            chk = false;
            break;
          }
        }
      }
    }
    if (chk) {
      if (isReverse) {
        list.reverse();
      }
      ans.push(`[${list.join(",")}]`);
    }
  }
  console.log(ans.join("\n"));
  process.exit();
});
