function solution(n) {
  let answer = Arrayr.from(String(n));
  answer = answer.map((key) => Number(key)).reverse();
  return answer;
}
solution(12345);
