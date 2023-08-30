const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [N, M] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const T = parseInt(input.shift());
  const lists = input.splice(0, T).map((x) => x.split(" ").map((x) => +x));
  let ans = 0;
  const convertBoard = (a, b) => {
    switch (a) {
      case 1:
        return [0, b];
      case 2:
        return [M, b];
      case 3:
        return [b, 0];
      case 4:
        return [b, N];
    }
  };
  const me = convertBoard(...input[0].split(" ").map((x) => +x));

  lists.forEach((x) => {
    const [nx, ny] = convertBoard(...x);
    let left = 0;
    let right = 0;
    let [cx, cy] = me.slice();
    while (true) {
      if (cx === nx && cy === ny) {
        break;
      }
      if (cx === M && cy > 0) {
        cy -= 1;
      } else if (cy === 0 && cx > 0) {
        cx -= 1;
      } else if (cx === 0 && cy < N) {
        cy += 1;
      } else if (cy === N && cx < M) {
        cx += 1;
      }
      left += 1;
    }
    [cx, cy] = me.slice();
    while (true) {
      if (cx === nx && cy === ny) {
        break;
      }
      if (cx === M && cy < N) {
        cy += 1;
      } else if (cy === N && cx > 0) {
        cx -= 1;
      } else if (cx === 0 && cy > 0) {
        cy -= 1;
      } else if (cy === 0 && cx < M) {
        cx += 1;
      }
      right += 1;
    }
    ans += Math.min(left, right);
  });
  console.log(ans);
  process.exit();
});
