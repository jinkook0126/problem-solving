const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const keynote = input.shift().split("");
  const user = input.shift().split("");
  const map = {
    W: 8,
    A: 4,
    S: 2,
    D: 6,
    LU: 7,
    LD: 1,
    RU: 9,
    RD: 3,
  };
  const keynoteList = [];
  const userList = [];
  const tmp = [];
  let result = [];

  keynote.forEach((x) => {
    if (x === "!") {
      keynoteList.push(10 - keynoteList.pop());
    } else if (x === "L" || x === "R" || x === "U") {
      tmp.push(x);
      if (tmp.length === 2) {
        keynoteList.push(map[tmp.splice(0, 2).join("")]);
      }
    } else if (x === "D") {
      if (tmp.length === 0) keynoteList.push(map[x]);
      else {
        tmp.push(x);
        keynoteList.push(map[tmp.splice(0, 2).join("")]);
      }
    } else {
      keynoteList.push(map[x]);
    }
  });
  user.forEach((x) => {
    if (/[0-9]/g.test(x)) {
      userList.push(parseInt(x));
    } else {
      userList.push(map[x]);
    }
  });
  userList.forEach((x) => {
    if (x === keynoteList[result.length]) {
      result.push(x);
    } else {
      result = [];
    }
  });
  if (result.length !== keynoteList.length) {
    console.log("No");
  } else {
    let flag = true;
    for (let i = 0; i < result.length; i++) {
      if (result[i] !== keynoteList[i]) {
        flag = false;
        break;
      }
    }
    console.log(flag ? "Yes" : "No");
  }
  process.exit();
});

// WLU!LDAS!D!RD!
// W31AW47
