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
  const ans = [];
  input.forEach((x) => {
    const [prev, post] = x.split(" ");
    const prevSort = prev
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
    const postSort = post
      .split("")
      .sort((a, b) => a.localeCompare(b))
      .join("");
    if (prevSort === postSort) {
      ans.push(`${prev} & ${post} are anagrams.`);
    } else {
      ans.push(`${prev} & ${post} are NOT anagrams.`);
    }
  });
  console.log(ans.join("\n"));
  process.exit();
});
