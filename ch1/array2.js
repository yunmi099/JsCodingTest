// 예제2) 배열의 최댓값, index 찾기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let data = input.map((x) => Number(x));
let max = Math.max(...data);
console.log(max);
console.log(input.indexOf(max) + 1);

//indexOf 함수, Math.max 이용
