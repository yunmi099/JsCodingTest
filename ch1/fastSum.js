/* • JavaScript를 이용해 문자열을 출력할 수 있어야 한다.
• 빠르게 출력하기 위해 하나의 문자열 변수에 정보를 담은 뒤에 한꺼번에 문자열을 출력한다.
• 한 줄(line)을 출력할 때마다 console.log()를 수행하면 많은 시간이 소요된다.
• 모든 “줄(line)”에 대한 정보를 하나의 문자열에 담았다가 한꺼번에 출력한다. */
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCase = Number(input[0]);
let anwser = " ";

for (let t = 1; t <= testCase; t++) {
  let data = input[t].split(" ");
  let a = Number(data[0]);
  let b = Number(data[1]);
  anwser += a + b + "\n";
}
console.log(anwser);
