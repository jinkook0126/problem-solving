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
  const map = new Map();
  const preOrder = [];
  const inOrder = [];
  const postOrder = [];
  input.forEach((x) => {
    const [root, l, r] = x.split(" ");
    map.set(root, [l, r]);
  });
  const DFS = (L) => {
    if (map.has(L)) {
      const [l, r] = map.get(L);
      preOrder.push(L);
      if (l !== ".") DFS(l);
      inOrder.push(L);
      if (r !== ".") DFS(r);
      postOrder.push(L);
    }
  };
  DFS("A");
  console.log([preOrder, inOrder, postOrder].map((x) => x.join("")).join("\n"));
  process.exit();
});
