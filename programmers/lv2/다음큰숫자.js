function solution(n) {
  let originalNumber = n.toString(2).split("0").join("").length;
  var answer = 0;
  while (1) {
    if (
      Number(n + 1)
        .toString(2)
        .split("0")
        .join("").length === originalNumber
    ) {
      answer = n + 1;
      break;
    }
    n = n + 1;
  }
  return answer;
}
console.log(solution(78));
