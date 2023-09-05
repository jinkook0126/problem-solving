const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const N = parseInt(input.shift());
  const map = new Map();
  for (let i = 1; i <= 3; i++) {
    map.set(i, [0, 0, 0, 0]);
  }
  input.forEach((x) => {
    x.split(" ")
      .map((x) => +x)
      .forEach((k, i) => {
        const user = map.get(i + 1);
        user[0] += k;
        user[k] += 1;
        map.set(i + 1, user);
      });
  });
  const arr = Array.from(map);
  arr.sort((a, b) => {
    if (a[1][0] === b[1][0]) {
      if (a[1][3] === b[1][3]) {
        if (a[1][2] === b[1][2]) {
          return b[1][1] - a[1][1];
        } else {
          return b[1][2] - a[1][2];
        }
      } else {
        return b[1][3] - a[1][3];
      }
    } else {
      return b[1][0] - a[1][0];
    }
  });
  if (
    arr[0][1][0] === arr[1][1][0] &&
    arr[0][1][3] === arr[1][1][3] &&
    arr[0][1][2] === arr[1][1][2]
  ) {
    console.log(`0 ${arr[0][1][0]}`);
  } else {
    console.log(`${arr[0][0]} ${arr[0][1][0]}`);
  }
});
