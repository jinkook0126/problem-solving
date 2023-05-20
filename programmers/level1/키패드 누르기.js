const sol = (numbers, hand) => {
  const left = [1, 4, 7];
  const right = [3, 6, 9];
  const pad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [-1, 0, -1],
  ];
  let l = [3, 0];
  let r = [3, 2];
  let ans = [];
  const findIndex = (k) => {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (pad[i][j] === k) {
          return [i, j];
        }
      }
    }
  };
  numbers.forEach((x) => {
    const target = findIndex(x);
    if (left.indexOf(x) !== -1) {
      ans.push("L");
      l = target;
    } else if (right.indexOf(x) !== -1) {
      ans.push("R");
      r = target;
    } else {
      const lDiff = Math.abs(l[0] - target[0]) + Math.abs(l[1] - target[1]);
      const rDiff = Math.abs(r[0] - target[0]) + Math.abs(r[1] - target[1]);
      if (lDiff === rDiff) {
        if (hand === "right") {
          r = target;
          ans.push("R");
        } else {
          l = target;
          ans.push("L");
        }
      } else if (lDiff > rDiff) {
        r = target;
        ans.push("R");
      } else if (lDiff < rDiff) {
        l = target;
        ans.push("L");
      }
    }
  });
  return ans.join("");
};
