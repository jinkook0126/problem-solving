// S3
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const str = input.shift();
  const ducks = [];
  if (str.length % 5 !== 0) {
    console.log(-1);
    return;
  }
  let left = 0;
  for (const c of str) {
    if (c === "q") {
      if (left > 0) {
        ducks.push(["X"]);
        left -= 1;
      } else {
        ducks.push(["O"]);
      }
    }
    if (c === "u") {
      const tmp = ducks.find((duck) => duck.length === 1);
      if (tmp) tmp.push(c);
    }
    if (c === "a") {
      const tmp = ducks.find((duck) => duck.length === 2);
      if (tmp) tmp.push(c);
    }
    if (c === "c") {
      const tmp = ducks.find((duck) => duck.length === 3);
      if (tmp) tmp.push(c);
    }
    if (c === "k") {
      const tmp = ducks.find((duck) => duck.length === 4);
      if (tmp) {
        tmp.push(c);
        left += 1;
      }
    }
  }
  if (ducks.filter((duck) => duck.length !== 5).length > 0) {
    console.log(-1);
  } else {
    console.log(ducks.filter((duck) => duck.join("") === "Ouack").length || -1);
  }
  process.exit();
});
