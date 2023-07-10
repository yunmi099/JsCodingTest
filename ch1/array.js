// 최댓값 최솟값 찾기
// /* 예제 1) map, reduce 이용
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let n = Number(input[0]);
let data = input[1].split(" ").map((x) => Number(x));
let minValue = data.reduce((a, b) => Math.min(a, b));
let maxValue = data.reduce((a, b) => Math.max(a, b));
console.log(minValue + " " + maxValue);

// readline 모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let data = input.map((x) => Number(x));
let max = Math.max(...data);
console.log(max);
console.log(input.indexOf(max) + 1);

//indexOf 함수, Math.max 이용
