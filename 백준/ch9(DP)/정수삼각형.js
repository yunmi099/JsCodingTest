let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let line = Number(input[0]);
let array = new Array(501).fill(null).map(() => new Array(line).fill(0));
for (let i = 0; i < line; i++) {
  array[i] = input[i + 1].split(" ").map(Number);
}
let dp = Array.from({ length: line }, () => new Array());
dp[0][0] = array[0][0];
for (let i = 1; i < line; i++) {
  for (let j = 0; j <= i; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][0] + array[i][j];
    } else if (j === i) {
      dp[i][j] = dp[i - 1][j - 1] + array[i][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + array[i][j];
    }
  }
}
let answer = Math.max(...dp[line - 1]);
console.log(answer);
