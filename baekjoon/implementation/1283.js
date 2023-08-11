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
  const set = new Set();
  const short = [];
  input.forEach((word) => {
    let check = true;
    let save = false;
    const spArray = word.split(" ");
    let sum = 0;
    for (let i = 0; i < spArray.length; i++) {
      if (!set.has(spArray[i][0].toUpperCase())) {
        check = false;
        save = true;
        set.add(spArray[i][0].toUpperCase());
        short.push(sum + i);
        break;
      } else {
        sum += spArray[i].length;
      }
    }
    if (check) {
      const wordArray = word.split("");

      for (let i = 0; i < wordArray.length; i++) {
        const x = wordArray[i];
        if (x !== " " && !set.has(x.toUpperCase())) {
          set.add(x.toUpperCase());
          short.push(i);
          save = true;
          break;
        }
      }
    }
    if (!save) {
      short.push(undefined);
    }
  });
  console.log(
    input
      .map((x, i) =>
        x
          .split("")
          .map((c, j) => {
            if (short[i] === j) {
              return `[${c}]`;
            } else {
              return c;
            }
          })
          .join("")
      )
      .join("\n")
  );
  process.exit();
});
// 5
// New
// Open
// Save
// Save As
// Save All

// [N]ew
// [O]pen
// [S]ave
// Save [A]s
// Sa[v]e All
