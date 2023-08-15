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
  if (str.includes("_")) {
    const arr = str.split("");
    let sb = "";
    let upper = false;
    let err = false;
    for (let i = 0; i < arr.length; i++) {
      const c = arr[i];
      if (
        (c !== "_" && c === c.toUpperCase()) ||
        (upper && !/[a-z]/.test(c)) ||
        (i === 0 && c === "_")
      ) {
        err = true;
        break;
      }
      if (c === "_") {
        upper = true;
        continue;
      }
      if (upper) {
        sb += c.toUpperCase();
        upper = false;
      } else {
        sb += c;
      }
    }
    if (err || upper) {
      console.log("Error!");
    } else {
      console.log(sb);
    }
  } else {
    let sb = "";
    const arr = str.split("");
    let err = false;
    for (let i = 0; i < arr.length; i++) {
      const c = arr[i];
      if (i === 0 && c === c.toUpperCase()) {
        err = true;
        break;
      }
      if (c === c.toUpperCase()) {
        sb += `_${c.toLowerCase()}`;
      } else {
        sb += c;
      }
    }
    if (err) {
      console.log("Error!");
    } else {
      console.log(sb);
    }
  }
  process.exit();
});
