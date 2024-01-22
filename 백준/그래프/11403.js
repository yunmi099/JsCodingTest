const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input.shift());
const graph = input.map((item) => item.split(" ").map(Number));
const bfs = (start) => {
  let queue = [start];
  let visited = Array(N).fill(0);
  while (queue.length > 0) {
    let current = queue.shift();
    for (let j = 0; j < N; j++) {
      if (graph[current][j] === 1 && !visited[j]) {
        visited[j] = 1;
        queue.push(j);
      }
    }
  }
  return visited;
};

const result = Array.from(Array(N), () => Array(N).fill(0));
for (let i = 0; i < N; i++) {
  result[i] = bfs(i);
}
result.forEach((row) => console.log(row.join(" ")));
