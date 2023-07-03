/*
B1
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
  const ori = input[0];
  let preNum = parseInt(ori / 10, 10);
  let postNum = parseInt(ori % 10, 10);
  let newNum = postNum * 10 + ((preNum + postNum) % 10);
  let cnt = 1;
  while (String(ori) !== String(newNum)) {
    cnt += 1;
    preNum = parseInt(newNum / 10, 10);
    postNum = parseInt(newNum % 10, 10);
    newNum = postNum * 10 + ((preNum + postNum) % 10);
  }
  console.log(cnt);
  process.exit();
});
