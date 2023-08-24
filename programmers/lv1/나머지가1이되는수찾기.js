let n = 12;
let solution = (n) => {
  let anwser;
  for (i = 2; i <= n; i++) {
    if (n % i === 1) {
      anwser = i;
      break;
    }
  }
  return anwser;
};
console.log(solution(n));
