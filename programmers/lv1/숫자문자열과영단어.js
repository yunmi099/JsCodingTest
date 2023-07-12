function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]); // number을 기준으로 split 하고 그 숫자 부분 사라짐
    answer = arr.join(i); // 그 사라진 부분을 index로 join시켜서 매꿈
  }
  return Number(answer);
}
console.log(solution("one3four10five"));
