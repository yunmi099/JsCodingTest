let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let number = Number(input[0]);
let result = [];
let count = 0;
result = Array.from({ length: number }, () => new Array());
for (let i = 1; i <= number; i++) {
  [...input[i]].reduce((a, b) => {
    if (a !== b) {
      result[i - 1].push(a);
      return b;
    } else {
      return a;
    }
  });
  result[i - 1].push([...input[i]][input[i].length - 1]);
}
for (let i = 1; i <= number; i++) {
  if ([...result[i - 1]].length === new Set([...result[i - 1]]).size) {
    count += 1;
  }
}
console.log(count);
