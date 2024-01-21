const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [h, w] = input[0].split(" ").map(Number);
const rain = input[1].split(" ").map(Number);
let water = 0;

for (let i = 0; i < w; i++) {
  const leftMax = Math.max(...rain.slice(0, i + 1));
  const rightMax = Math.max(...rain.slice(i));
  const standard = Math.min(leftMax, rightMax);
  water = water + standard - rain[i];
}
console.log(water);
