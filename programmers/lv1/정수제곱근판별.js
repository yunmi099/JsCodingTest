function solution(n) {
  var answer = 0;
  if (Math.sqrt(n) === parseInt(Math.sqrt(n))) {
    answer = (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1);
  } else {
    answer = -1;
  }
  return answer;
}
