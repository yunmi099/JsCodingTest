let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let number = Number(input[0]);
let array = [];
let dp = new Array(10001).fill(0);
for (let i = 1; i <= number; i++) {
  array.push(Number(input[i]));
}
dp[0] = array[0];
dp[1] = array[0] + array[1];
dp[2] = Math.max(array[1] + array[2], array[0] + array[2], dp[1]);

for (let i = 3; i < number; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    array[i] + array[i - 1] + dp[i - 3],
    array[i] + dp[i - 2]
  );
}
console.log(dp[number - 1]);
