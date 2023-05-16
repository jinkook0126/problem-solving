const sol = (n) => {
  const dp = Array(n + 1).fill(0);
  dp[0] = 0n;
  dp[1] = 1n;
  dp[2] = 2n;
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000007n;
  }
  return dp[n].toString();
};

console.log(sol(4));
