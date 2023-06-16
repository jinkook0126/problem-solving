/*
S4: 가장 긴 단어   
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
  input[input.length - 1] = input[input.length - 1].replace(/E\-N\-D/, "");
  console.log(
    Math.max(
      ...input
        .join(" ")
        .split(" ")
        .map((x) => x.length)
    )
  );
  process.exit();
});
//     ACM International Collegiate Programming Contest (abbreviated as
//     ACM-ICPC or just ICPC) is an annual multi-tiered computer programming
//     competition among the universities of the world. The contest is
//     sponsored by IBM. Headquartered at Baylor University, with autonomous
//     regions on six continents, the ICPC is directed by Baylor Professor
//     William B. Poucher, Executive Director, and operates under the
//     auspices of the Association for Computing Machinery (ACM).

//       The 2012 ACM-ICPC Asia Hatyai Regional Programming Contest is
//     held during 15-16 November 2012. It is hosted by Prince of Songkla
//     University, Hatyai campus. E-N-D
