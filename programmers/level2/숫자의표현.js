const sol = (n) => {
  let cnt = 0;
  const arr = Array(n + 1)
    .fill()
    .map((_, i) => i);
  let lt = 1;
  let rt = 1;
  let sum = 1;
  while (lt <= rt && rt <= Math.ceil(n / 2)) {
    if (sum > n) {
      sum -= arr[lt++];
    } else if (sum < n) {
      sum += arr[++rt];
    } else {
      cnt += 1;
      sum += arr[++rt];
    }
  }
  return n === 1 ? 1 : cnt + 1;
};
