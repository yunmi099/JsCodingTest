const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(input[0]);
let order = input[1].split(" ");
let answer = new Array(n).fill(0);
order.forEach((moreTallerPeople, name) => {
  if (answer[moreTallerPeople] === 0) {
    answer[moreTallerPeople] = name + 1;
  } else {
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === 0 && name <= i) {
        answer[i] = name + 1;
        break;
      }
    }
  }
});

console.log(answer);
