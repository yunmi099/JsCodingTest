const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [N, M] = input[0].split(" ").map(Number);
let startQueue = input[1].split(" ").map(Number);

const direction = [
  [-1, 0], // 북
  [0, -1], // 동
  [1, 0], // 남
  [0, 1], // 서
];
let arr = [];

let visited = Array.from(Array(N), () => new Array(M).fill(0));

for (let i = 2; i < 2 + N; i++) {
  arr.push(input[i].split(" ").map(Number));
}
const queue = [startQueue];
let answer = 0;
while (queue.length) {
  let [x, y, d] = queue.shift();
  const originalDirection = d;
  if (!arr[x][y] && !visited[x][y]) {
    answer = answer + 1;
    visited[x][y] = 1;
  }

  for (let i = 0; i < 4; i++) {
    d = (d + 1) % 4;
    const nx = x + direction[d][0];
    const ny = y + direction[d][1];

    if (!arr[nx][ny] && !visited[nx][ny]) {
      queue.push([nx, ny, d]);
      break;
    }

    if (i === 3) {
      const backDir = (originalDirection + 2) % 4;
      const bx = x + direction[backDir][0];
      const by = y + direction[backDir][1];
      if (!arr[bx][by]) {
        queue.push([bx, by, d]);
        break;
      }
    }
  }
}
console.log(answer);
