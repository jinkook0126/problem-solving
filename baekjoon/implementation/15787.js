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
  const [N, M] = input.shift();
  const train = Array(N)
    .fill()
    .map(() => Array(20).fill(0));
  for (let i = 0; i < input.length; i++) {
    const [cmd, tr, st] = input[i];
    if (cmd === 1) {
      train[tr - 1][st - 1] = 1;
    } else if (cmd === 2) {
      train[tr - 1][st - 1] = 0;
    } else if (cmd === 3) {
      train[tr - 1].pop();
      train[tr - 1].unshift(0);
    } else {
      train[tr - 1].push(0);
      train[tr - 1].shift();
    }
  }
  const set = new Set();
  train.forEach((x) => {
    set.add(x.join(""));
  });
  console.log(set.size);
  process.exit();
});

// 5 5
// 1 1 1
// 1 1 2
// 1 2 2
// 1 2 3
// 3 1

// 2

// 5 5
// 1 1 1
// 4 1
// 2 2 2
// 1 3 3
// 1 4 4
