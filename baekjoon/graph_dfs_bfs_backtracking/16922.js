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
  const set = new Set();
  const roma = ["I", "V", "X", "L"];
  const getPoint = (t) => {
    switch (t) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
    }
  };
  const DFS = (L, idx, s) => {
    if (L === N) {
      set.add(s);
    } else {
      for (let i = idx; i < roma.length; i++) {
        DFS(L + 1, i, s + getPoint(roma[i]));
      }
    }
  };
  DFS(0, 0, 0);

  console.log(set.size);
  process.exit();
});
