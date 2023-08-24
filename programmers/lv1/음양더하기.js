function solution(absolutes, signs) {
  let answer = 0;
  absolutes.map((key, index) => {
    signs[index] ? (answer += key) : (answer += key * -1);
  });

  return answer;
}
