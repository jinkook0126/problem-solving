const solution = (n) => {
  let ans = 1;
  let dis = 1;
  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      ans += 1;
      n -= 1;
    }
  }
  return ans;
};
