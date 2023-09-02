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
  let win = null;
  let coordinate = [];
  const dx = [-1, -1, 0, 1];
  const dy = [0, 1, 1, 1];
  for (let i = 0; i < 19; i++) {
    for (let j = 0; j < 19; j++) {
      if (input[i][j] === 1 || input[i][j] === 2) {
        for (let k = 0; k < 8; k++) {
          let left = true;
          let right = true;
          let num = 1;
          const tmpCoor = [[i, j]];
          let cnt = 1;
          while (left || right) {
            let tx = i + dx[k] * num;
            let ty = j + dy[k] * num;
            if (
              right &&
              tx >= 0 &&
              tx < 19 &&
              ty >= 0 &&
              ty < 19 &&
              input[tx][ty] === input[i][j]
            ) {
              cnt += 1;
              tmpCoor.push([tx, ty]);
            } else {
              right = false;
            }
            tx = i - dx[k] * num;
            ty = j - dy[k] * num;

            if (
              left &&
              tx >= 0 &&
              tx < 19 &&
              ty >= 0 &&
              ty < 19 &&
              input[tx][ty] === input[i][j]
            ) {
              cnt += 1;
              tmpCoor.push([tx, ty]);
            } else {
              left = false;
            }
            num += 1;
          }
          if (cnt === 5) {
            win = input[i][j];
            tmpCoor.sort((a, b) => {
              if (a[1] === b[1]) {
                return a[0] - b[0];
              } else {
                return a[1] - b[1];
              }
            });
            coordinate = [tmpCoor[0][0] + 1, tmpCoor[0][1] + 1];
            break;
          }
        }
      }
    }
  }
  if (win === null) {
    console.log(0);
  } else {
    console.log([win, coordinate.join(" ")].join("\n"));
  }
  process.exit();
});
