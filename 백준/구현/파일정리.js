let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input = fs.readFileSync("./input.txt").toString().split("\n");
let number = Number(input[0]);
let countMap = new Map();
let answer = "";
for (let i = 1; i <= number; i++) {
  let extension = input[i].split(".")[1];
  if (countMap.has(extension)) {
    countMap.set(extension, countMap.get(extension) + 1);
  } else {
    countMap.set(extension, 1);
  }
}
let kindOfFile = [...countMap.keys()].sort();

kindOfFile.forEach((item, index) => {
  answer += (index ? `\n` : "") + `${item} ${countMap.get(item)}`;
});

console.log(answer);
