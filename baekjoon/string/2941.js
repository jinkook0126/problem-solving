/*

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
  const str = input[0].replace(/c=|c-|dz=|d-|lj|nj|s=|z=/g, " ");
  console.log(str.length);
  process.exit();
});
// ljes=njak
