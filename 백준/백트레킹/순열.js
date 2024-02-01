const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);

let visited = new Array(n + 1).fill(false);
let selected = [];

let answer = "";

const dfs = (depth) => {
  if (depth === m) {
    for (let x of selected) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
};
dfs(0);
console.log(answer);
