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
  const arr = input.shift();
  const ans = [];
  let l = 0;
  let r = 0;
  let sum = arr[0];

  for (let i = 0; i < input.length; i++) {
    let [from, to] = input[i];
    from -= 1;
    to -= 1;
    while (l !== from || r !== to) {
      if (l < from) {
        sum -= arr[l++];
      } else if (l > from) {
        sum += arr[++l];
      }
      if (r < to) {
        sum += arr[++r];
      } else if (r > to) {
        sum -= arr[r++];
      }
    }
    ans.push(sum);
  }
  console.log(ans.join("\n"));
  process.exit();
});
