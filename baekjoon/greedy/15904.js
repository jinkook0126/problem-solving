const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", function (line) {
  input.push(line.trim());
}).on("close", function () {
  const S = input.shift();
  const str = S.split(" ").join("");
  const st = [];
  const ucpc = ["U", "C", "P", "C"];
  for (let i = 0; i < str.length; i++) {
    if (ucpc[st.length] === str[i]) {
      st.push(str[i]);
    }
    if (st.length === 4) break;
  }
  if (st.join("") === "UCPC") {
    console.log("I love UCPC");
  } else {
    console.log("I hate UCPC");
  }
  process.exit();
});
