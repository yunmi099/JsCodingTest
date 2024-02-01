const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let visited = new Array(n + 1).fill(0);
let selected = [];
let answer = "";
const dfs = (start, depth) => {
  if (depth === m) {
    for (let x of selected) answer += x + " ";
    answer += "\n";
    return answer;
  }
  for (let i = start; i <= n; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = 1;
    dfs(i, depth + 1);
    selected.pop();
    visited[i] = 0;
  }
};

dfs(1, 0);
console.log(answer);
