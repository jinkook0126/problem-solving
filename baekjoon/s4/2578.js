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
  const board = input.splice(0, 5);
  let flag = false;
  const onCheckBingo = (a, b) => {
    let total = 0;
    let crossCnt1 = 0;
    let crossCnt2 = 0;
    let rowCnt = 0;
    let colCnt = 0;
    for (let i = 0; i < 5; i++) {
      if (board[i][i] === 0) crossCnt1 += 1;
      if (board[i][Math.abs(i - 4)] === 0) crossCnt2 += 1;
    }
    if (crossCnt1 === 5) total += 1;
    if (crossCnt2 === 5) total += 1;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (board[i][j] === 0) {
          rowCnt += 1;
        }
        if (board[j][i] === 0) {
          colCnt += 1;
        }
      }
      if (rowCnt === 5) total += 1;
      if (colCnt === 5) total += 1;
      rowCnt = 0;
      colCnt = 0;
    }
    if (total >= 3) flag = true;
  };
  const mc = input.flat(2);
  let ans = 0;
  for (let i = 0; i < mc.length; i++) {
    if (flag) {
      ans = i;
      break;
    }
    const target = mc[i];
    let findFlag = false;
    for (let j = 0; j < 5; j++) {
      if (findFlag || flag) break;
      for (let k = 0; k < 5; k++) {
        if (findFlag || flag) break;
        if (target === board[j][k]) {
          board[j][k] = 0;
          findFlag = true;
          onCheckBingo(mc[i], i);
        }
      }
    }
  }
  console.log(ans);
});
