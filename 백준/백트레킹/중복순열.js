const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);

let selected = [];

let answer = "";

const dfs = (depth) => {
  if (depth === m) {
    for (let x of selected) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let i = 1; i <= n; i++) {
    selected.push(i);
    dfs(depth + 1);
    selected.pop();
  }
};
dfs(0);
console.log(answer);
