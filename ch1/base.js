// 1. 입력데이터가 텍스트 파일 형태 일떄
// EX) /dev/stdin 파일에 적힌 텍스트를 읽어오는 경우

let fs = require("fs");
const { blob } = require("stream/consumers");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
console.log(input);
// 줄바꿈 기호로 구분하여 리스트로 변환하기

// 2. 한 줄씩 입력을 받아서, 처리하여 정답을 출력할 때는 readline 모듈을 사용할 수 있다.

const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputline = [];
rl.on("line", function (line) {
  // 콘솔 입력 창에서 줄바꿈(Enter)를 입력할 때마다 호출
  inputline.push(line);
}).on("closㄴe", function () {
  // 콘솔 입력 창에서 Ctrl+C 혹은 Ctrl+D를 입력하면 호출
  console.log(input);
  process.exit();
});
// 3. reduce()
//배열의 모든 원소에 대해 특정한 연산을 순차적으로 적용할 때 reduce()를 사용한다.
/* reduce()메서드는 배열의 각 요소에 대해 reducer 함수를 실행 한 뒤에 하나의 결과를
반환한다. 
reducer의 형태 : (accumulator, currentValue)=>(반환값)
- 배열의 각 원소를 하나씩 확인하며, 각 원소는 currentValue에 해당합니다.
- 반환값은 그 이후의 원소에 대하여 accumulator에 저장됩니다.
*/
let data = [5, 2, 9, 8, 4];

let minValue = data.reduce((a, b) => {
  console.log(`a =${a}`);
  console.log(`b =${b}`);
  console.log(Math.min(a, b));
  return Math.min(a, b);
});
console.log(minValue);
// 최솟값을 구하는 예제

let summary = data.reduce((a, b) => {
  console.log(`a = ${a}`);
  console.log(`b = ${b}`);
  console.log(a + b);
  return a + b;
});
console.log(summary);
// 원소의 합을 구하는 예제

// 4.배열을 초기화 하는 방법
let arr = new Array(5).fill(0);
// 결과 : [0,0,0,0,0]

// 5. 집합 자료형
let mySet = new Set(); //집합 객체 생성
mySet.add(5);
mySet.add(1);
mySet.add(3);
mySet.add(5);

console.log(`원소의 개수: ${mySet.size}`);
console.log(`원소 7을 포함하고 있는가? ${mySet.has(7)}`);

mySet.delete(5);
for (let item of mySet) console.log(item);

// 5. 실수를 출력할 때 소수점 아래 특정 자리에서 반올림 할 수 있다.
let x = 123.456;
console.log(x.toFixed(2));

// 6. 이스케이프 시퀀스(Escape Sequence)
