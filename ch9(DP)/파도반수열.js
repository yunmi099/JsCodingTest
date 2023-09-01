let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);
let question = [];

for (let i = 1; i <= testCase; i++) {
  question.push(Number(input[i]));
}
let dp = new Array(101).fill(0);

dp[0] = 1;
dp[1] = 1;
dp[2] = 1;

for (let i = 3; i < Math.max(...question); i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

question.map((key) => console.log(dp[key - 1]));
