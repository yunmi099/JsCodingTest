const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
n = Number(input[0]);
let order = input[1].split(" ");
let answer = new Array(n).fill(0);
order.forEach((item, index) => {
  let temp = Number(item);
  while (1) {
    let slicedArr = [...answer].join("").slice(0, temp);
    let zeroCount = slicedArr.length - slicedArr.split(0).join("").length;
    if (answer[temp] === 0 && zeroCount === Number(item)) {
      answer[temp] = index + 1;
      break;
    } else {
      temp = temp + 1;
    }
  }
});
console.log(answer.join(" "));
