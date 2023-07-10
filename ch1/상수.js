let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let a = [...String(input[0].split(" ")[0])].reverse();
let b = [...String(input[0].split(" ")[1])].reverse();
console.log(Math.max(Number(a.join("")), Number(b.join(""))));

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// reverseString("hello");
