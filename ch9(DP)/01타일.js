let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let N = input[0];

let dp = new Array(1000000).fill(0);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= N; i++) {
  dp[i] = (dp[i - 2] + dp[i - 1]) % 15746;
}

console.log(dp[N]);
