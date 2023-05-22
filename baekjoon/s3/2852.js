/*
https://www.acmicpc.net/problem/2852
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
  const n = parseInt(input.shift());
  let t1 = "00:00";
  let t2 = "00:00";
  let sc1 = 0;
  let sc2 = 0;
  let record = false;
  let win = -1;
  const calcTime = (x, y, op) => {
    const [xm, xs] = x.split(":").map((x) => +x);
    const [ym, ys] = y.split(":").map((x) => +x);
    let rm = 0;
    let rs = 0;
    if (op === "+") {
      rm = xm + ym;
      rs = xs + ys;
      if (rs >= 60) {
        rm += 1;
        rs -= 60;
      }
    } else if (op === "-") {
      rm = xm - ym;
      rs = xs - ys;
      if (rs < 0) {
        rm -= 1;
        rs += 60;
      }
    }
    return `${rm}:${rs}`;
  };
  input.forEach((x, i) => {
    const [t, time] = x.split(" ");
    let prevTime = "";
    if (t === "1") {
      sc1 += 1;
    } else {
      sc2 += 1;
    }
    if (i !== 0) {
      prevTime = input[i - 1].split(" ")[1];
    }
    if (record) {
      if (sc1 > sc2) {
        t1 = calcTime(calcTime(t1, time, "+"), prevTime, "-");
        win = 1;
      } else if (sc1 < sc2) {
        t2 = calcTime(calcTime(t2, time, "+"), prevTime, "-");
        win = 2;
      } else {
        record = false;
        if (win === 1) {
          t1 = calcTime(calcTime(t1, time, "+"), prevTime, "-");
        } else {
          t2 = calcTime(calcTime(t2, time, "+"), prevTime, "-");
        }
        win = -1;
      }
    } else {
      record = true;
      win = sc1 > sc2 ? 1 : 2;
    }
  });
  const prevTime = input.at(-1).split(" ")[1];
  if (record) {
    if (win === 1) {
      t1 = calcTime(calcTime(t1, "48:00", "+"), prevTime, "-");
    } else {
      t2 = calcTime(calcTime(t2, "48:00", "+"), prevTime, "-");
    }
  }
  const team1 = t1
    .split(":")
    .map((x) => `0${x}`.slice(-2))
    .join(":");
  const team2 = t2
    .split(":")
    .map((x) => `0${x}`.slice(-2))
    .join(":");
  console.log([team1, team2].join("\n"));
  process.exit();
});
