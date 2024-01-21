const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const N = input[0];
const inequality = input[1].split(" ");
const visit = new Array(10).fill(0);

let max = String(Number.MIN_SAFE_INTEGER);
let min = String(Number.MAX_SAFE_INTEGER);

const dfs = (L, prev, result) => {
  if (L === N) {
    max = result > max ? result : max;
    min = result < min ? result : min;
    return;
  }
  if (inequality[L] === "<") {
    for (let i = prev + 1; i < 10; i++) {
      if (visit[i]) continue;
      visit[i] = 1;
      dfs(L + 1, i, result + i);
      visit[i] = 0;
    }
  } else {
    for (let i = prev - 1; i > -1; i--) {
      if (visit[i]) continue;
      visit[i] = 1;
      dfs(L + 1, i, result + i);
      visit[i] = 0;
    }
  }
  return;
};

for (let i = 0; i < 10; i++) {
  visit[i] = 1;
  dfs(0, i, String(i));
  visit[i] = 0;
}

console.log(`${min}\n${max}`);
