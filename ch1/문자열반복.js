let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let testCase = Number(input[0]);
let result = "";
for (let i = 1; i <= testCase; i++) {
  let [N, word] = input[i].split(" ");
  [...String(word)].map((key) => (result += key.repeat(N)));
  result += `\n`;
}
console.log(result);
