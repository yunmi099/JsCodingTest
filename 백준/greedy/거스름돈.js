const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let money = Number(input);
let count = 0;
if (money === 1 || money === 3) {
  count = -1;
} else {
  while (money > 0) {
    if (money % 5 === 0 || money % 2 === 1) {
      money = money - 5;
      count++;
    } else if (money % 2 === 0) {
      money = money - 2;
      count++;
    }
  }
}

console.log(count);
