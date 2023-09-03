const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [startTime, exitTime, endTime] = input.shift().split(" ");
  const [startH, startM] = startTime.split(":").map((x) => +x);
  const [exitH, exitM] = exitTime.split(":").map((x) => +x);
  const [endH, endM] = endTime.split(":").map((x) => +x);
  const startTotal = startH * 60 + startM;
  const exitTotal = exitH * 60 + exitM;
  const endTotal = endH * 60 + endM;
  const set = new Set();
  let cnt = 0;
  input.forEach((x) => {
    const [time, name] = x.split(" ");
    const [h, m] = time.split(":").map((x) => +x);
    const inputTotal = h * 60 + m;
    if (inputTotal <= startTotal) {
      set.add(name);
    } else if (exitTotal <= inputTotal && inputTotal <= endTotal) {
      if (set.has(name)) {
        set.delete(name);
        cnt += 1;
      }
    }
  });
  console.log(cnt);
  process.exit();
});
