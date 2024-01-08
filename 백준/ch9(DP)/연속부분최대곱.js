let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let array = [];
let n = Number(input[0]);
for (i = 0; i < n; i++) {
  array[i] = Number(input[i + 1]);
}
let dp = new Array(n).fill(0);
dp[0] = array[0];
for (i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i - 1] * array[i], array[i]);
}

console.log(Math.max(...dp).toFixed(3));
