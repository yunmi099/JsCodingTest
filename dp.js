const { parseArgs } = require("util");

let n = 32;
let dp = new Array(n).fill(0);
let parents = 2;
let childs = 1;
dp[0] = 1;
dp[1] = n;

let token = true;
let count = 0;
// dp[i] = (n * childs) / parents;
// dp[i + 1] = (n * (parents - childs)) / parents + 1;

// dp[i] = (n * childs) / parents + 1;
// dp[i + 1] = (n * (parents - childs)) / parents;

for (let i = 2; i < n; i = i + 2) {
  console.log(`i = ${i}`);
  dp[i] = (n * childs) / parents;
  dp[i + 1] = (n * (parents - childs)) / parents + 1;
  childs = childs + 2;
  if (n * (parents - childs) < parents) {
    parents = parents * 2;
    childs = 1;
  }
}
console.log(dp);
