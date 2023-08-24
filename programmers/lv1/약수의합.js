function solution(n) {
  let answer = [];
  let sum;
  if (n !== 0) {
    for (let i = 1; i <= Math.ceil(n / 2); i++) {
      if (n % i === 0) {
        answer.push(i, n / i);
      }
    }
    sum = [...new Set(answer)].reduce((a, b) => a + b);
  } else {
    sum = 0;
  }
  return sum;
}
console.log(solution(0));
