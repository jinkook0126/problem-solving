/*
G5: LCS
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
  const str1 = input[0].split("");
  const str2 = input[1].split("");
  const LCS = Array(1001)
    .fill()
    .map(() => Array(1001).fill(0));
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        LCS[i][j] = LCS[i - 1][j - 1] + 1;
      } else {
        LCS[i][j] = Math.max(LCS[i - 1][j], LCS[i][j - 1]);
      }
    }
  }
  console.log(LCS[str1.length][str2.length]);
  process.exit();
});
