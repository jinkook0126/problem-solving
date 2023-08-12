const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const today = input.shift();
  const N = parseInt(input.shift());
  let ans = 0;

  const [today_year, today_month, today_day] = today.split("-").map((x) => +x);
  for (let i = 0; i < N; i++) {
    const [gift_year, gift_month, gift_day] = input[i]
      .split("-")
      .map((x) => +x);

    if (today_year !== gift_year) {
      ans += today_year < gift_year ? 1 : 0;
      continue;
    }
    if (today_month !== gift_month) {
      ans += today_month < gift_month ? 1 : 0;
      continue;
    }
    if (today_day !== gift_day) {
      ans += today_day < gift_day ? 1 : 0;
      continue;
    }
    ans += 1;
  }
  console.log(ans);
  process.exit();
});
// 2023-08-12
// 1
// 2023-08-11
