function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    char === "(" ? count++ : count--;
    // 삼항연산자로 하면 한 번만 검사하지만, 조건문으로 처리하면 두 번 검사한다. 조건문으로 사용할 것.
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
}
console.log(solution("((())()())"));
