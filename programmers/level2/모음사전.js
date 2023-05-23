const sol = (word) => {
  const arr = ["A", "E", "I", "O", "U"];
  const tmp = Array(5).fill("");
  let cnt = 0;
  let ans = -1;
  let ch = false;
  const DFS = (L) => {
    if (ch) return;
    if (tmp.join("") === word) {
      ans = cnt;
      ch = true;
      return;
    }
    if (L === 5) {
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        tmp[L] = arr[i];
        cnt += 1;
        DFS(L + 1);
      }
      tmp[L] = "";
    }
  };
  DFS(0);
  return ans;
};
