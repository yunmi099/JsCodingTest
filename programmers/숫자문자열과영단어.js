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
    let arr = answer.split(numbers[i]);
    console.log(i);
    console.log(`arr: ${arr}`);
    answer = arr.join(i);
    console.log(`answer: ${answer}`);
  }
  return Number(answer);
}
console.log(solution("one3four10five"));
