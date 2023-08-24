function solution(seoul) {
  let answer;
  seoul.map((key, index) => {
    if (key === "Kim") {
      answer = `김서방은 ${index}에 있다`;
    }
  });
  return answer;
}
