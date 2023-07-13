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
  input.pop();
  const ans = [];
  input.forEach((x, idx) => {
    const [L, P, V] = x;
    const div = parseInt(V / P);
    const mod = V % P;
    ans.push(`Case ${idx + 1}: ${div * L + (mod > L ? L : mod)}`);
  });
  console.log(ans.join("\n"));

  process.exit();
});
