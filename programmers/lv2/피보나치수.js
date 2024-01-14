const solution = (n) => {
  let dp = new Array(n).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  for (i = 2; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
  }
  return dp[n];
};
console.log(solution(50));
