const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
const [L, C] = input[0].split(" ").map(Number);
const alpabet = input[1].split(" ").sort();
const vowel = ["a", "e", "i", "o", "u"];
let answer = [];
const backtracking = (str, index) => {
  if (str.length === L) {
    let count = 0;
    for (let item of vowel) {
      [...str].includes(item) ? count++ : null;
    }
    if (count > 0 && L - count > 1) {
      answer.push(str);
    }
    return;
  } else {
    for (let i = index; i < C; i++) {
      backtracking(str + alpabet[i], i + 1);
    }
  }
};

backtracking("", 0);
console.log(answer);
