/*
https://www.acmicpc.net/problem/10866
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
  input.shift();
  const deque = [];
  const res = [];
  input.forEach((x) => {
    const [cmd, n] = x.split(" ");
    if (cmd === "push_front") {
      deque.unshift(n);
    } else if (cmd === "push_back") {
      deque.push(n);
    } else if (cmd === "pop_front") {
      res.push(deque.shift() || -1);
    } else if (cmd === "pop_back") {
      res.push(deque.pop() || -1);
    } else if (cmd === "size") {
      res.push(deque.length);
    } else if (cmd === "empty") {
      res.push(deque.length === 0 ? 1 : 0);
    } else if (cmd === "front") {
      res.push(deque[0] || -1);
    } else if (cmd === "back") {
      res.push(deque.at(-1) || -1);
    }
  });
  console.log(res.join("\n"));
  process.exit();
});
