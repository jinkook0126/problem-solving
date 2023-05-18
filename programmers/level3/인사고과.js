const sol = (scores) => {
  const [ox, oy] = scores[0];
  const wonho = scores[0][0] + scores[0][1];
  let max = 0;
  ans = 1;
  scores.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return b[0] - a[0];
    }
  });
  for (let i = 0; i < scores.length; i++) {
    if (max > scores[i][1]) {
      if (ox === scores[i][0] && oy === scores[i][1]) {
        ans = -1;
        break;
      }
    } else {
      max = scores[i][1];
      if (scores[i][0] + scores[i][1] > wonho) ans += 1;
    }
  }
  return ans;
};
