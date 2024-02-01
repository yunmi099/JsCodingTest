const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);

let selected = [];

let answer = "";

const dfs = (start, depth) => {
  if (depth === m) {
    for (let x of selected) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let i = start; i <= n; i++) {
    selected.push(i);
    dfs(i, depth + 1);
    selected.pop();
  }
};
dfs(1, 0);
console.log(answer);
