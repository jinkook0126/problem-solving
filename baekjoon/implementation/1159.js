const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const N = input.shift();
  const map = new Map();
  input.forEach((x) => {
    map.set(x[0], map.get(x[0]) + 1 || 1);
  });
  const arr = Array.from(map);
  const players = arr.filter((x) => x[1] >= 5).map((x) => x[0]);
  if (players.length === 0) {
    console.log("PREDAJA");
  } else {
    players.sort((a, b) => a.localeCompare(b));
    console.log(players.join(""));
  }
  process.exit();
});
