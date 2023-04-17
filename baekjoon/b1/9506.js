/*
https://www.acmicpc.net/problem/9506
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
  input.pop();
  const res = [];
  const getYaksu = (n) => {
    const yak = [];
    for (let i = 1; i < n; i++) {
      if (n % i === 0) yak.push(i);
    }
    return yak;
  };
  for (const n of input) {
    const yak = getYaksu(n);
    if (yak.reduce((prev, curr) => prev + curr, 0) === n) {
      res.push(`${n} = ${yak.join(" + ")}`);
    } else {
      res.push(`${n} is NOT perfect.`);
    }
  }
  console.log(res.join("\n"));
  process.exit();
});
