const solution = (brown, yellow) => {
  for (let i = 1; i <= Math.ceil(yellow / i); i++) {
    if (yellow % i === 0) {
      if ((i + 2) * (yellow / i + 2) === brown + yellow) {
        return [yellow / i + 2, i + 2];
      }
    }
  }
};

console.log(solution(24, 24));
