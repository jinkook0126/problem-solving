/*
https://www.acmicpc.net/problem/20006
 */
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const [p, m] = input
    .shift()
    .split(" ")
    .map((x) => +x);
  const rooms = [];
  input.forEach((user) => {
    const [lv, name] = user.split(" ").map((x, i) => (i === 0 ? +x : x));
    if (rooms.length === 0) {
      rooms.push([[lv, name]]);
    } else {
      let ch = true;
      for (let i = 0; i < rooms.length; i++) {
        const leader = rooms[i][0][0];
        if (leader - 10 <= lv && leader + 10 >= lv && rooms[i].length < m) {
          ch = false;
          rooms[i].push([lv, name]);
          break;
        }
      }
      if (ch) rooms.push([[lv, name]]);
    }
  });
  rooms.forEach((room) => {
    room.sort((a, b) => a[1].localeCompare(b[1]));
  });
  let ans = "";
  rooms.forEach((room) => {
    if (room.length === m) {
      ans += "\nStarted!\n";
    } else {
      ans += "\nWaiting!\n";
    }
    ans += `${room.map((x) => x.join(" ")).join("\n")}`;
  });
  console.log(ans.trim());
  process.exit();
});
