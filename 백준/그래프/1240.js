const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);

const graph = new Map();

for (let i = 1; i <= n - 1; i++) {
  let [a, b, dist] = input[i].split(" ").map(Number);
  if (!graph.has(a)) {
    graph.set(a, []);
  }
  if (!graph.has(b)) {
    graph.set(b, []);
  }
  graph.get(a).push({ node: b, dist });
  graph.get(b).push({ node: a, dist });
}
console.log(graph);
const bfs = (start, end) => {
  let visited = new Array(n + 1).fill(false);
  let queue = [{ node: start, distance: 0 }];

  while (queue.length) {
    let { node, distance } = queue.shift();
    if (node === end) {
      return distance;
    }

    for (let value of graph.get(node)) {
      if (!visited[value.node]) {
        visited[value.node] = true;
        queue.push({ node: value.node, distance: distance + value.dist });
      }
    }
  }
};

let answer = "";
for (let i = n; i < n + m; i++) {
  let [start, end] = input[i].split(" ").map(Number);
  answer += bfs(start, end) + "\n";
}

console.log(answer.trim());
