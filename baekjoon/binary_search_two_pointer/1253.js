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
  const arr = input
    .shift()
    .split(" ")
    .map((x) => +x)
    .sort((a, b) => a - b);
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    let left = 0;
    let right = arr.length - 1;
    const target = arr[i];
    while (left < right) {
      const sum = arr[left] + arr[right];
      if (sum === target) {
        if (left === i) {
          left += 1;
        } else if (right === i) {
          right -= 1;
        } else {
          cnt += 1;
          break;
        }
      } else if (sum < target) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }

  console.log(cnt);
  process.exit();
});
