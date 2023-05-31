const sol = (ability) => {
  const n = ability[0].length;
  const ch = Array(ability.length).fill(false);
  const tmp = Array(n).fill(0);
  let max = 0;
  const DFS = (l) => {
    if (l === n) {
      max = Math.max(
        max,
        tmp.slice().reduce((acc, prev) => acc + prev, 0)
      );
    } else {
      for (let i = 0; i < ability.length; i++) {
        if (ch[i] === false) {
          ch[i] = true;
          tmp[l] = ability[i][l];
          DFS(l + 1);
          ch[i] = false;
        }
      }
    }
  };
  DFS(0);
  return max;
};
