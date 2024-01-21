const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const [total, start, goal, up, down] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const visited = Array(total + 1).fill(0);
let queue = [[start, 0]];
const bfs = () => {
  while (queue.length) {
    let current = queue.shift();
    if (current[0] === goal) {
      return current[1];
    }
    if (visited[current[0]]) continue;
    visited[current[0]] = 1;
    if (
      current[0] + up > 0 &&
      current[0] + up <= total &&
      !visited[current[0] + up]
    ) {
      queue.push([current[0] + up, current[1] + 1]);
    }

    if (
      current[0] - down > 0 &&
      current[0] - down <= total &&
      !visited[current[0] - down]
    ) {
      queue.push([current[0] - down, current[1] + 1]);
    }
  }
};
answer = bfs();
if (answer !== undefined) {
  console.log(answer);
} else {
  console.log("use the stairs");
}
