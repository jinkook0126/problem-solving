const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(parseInt(line.trim()));
}).on("close", function () {
  const N = input.shift();
  let check = true;
  let i = 1;
  let mother = 1;
  let son = 1;
  let count = 0;
  while (check) {
    for (let j = 0; j < i; j++) {
      count += 1;
      if (i % 2 === 0) {
        son = 1 + j;
        mother = i - j;
      } else {
        son = i - j;
        mother = 1 + j;
      }

      if (count === N) {
        check = false;
        break;
      }
    }
    i += 1;
  }
  console.log(`${son}/${mother}`);
  process.exit();
});
