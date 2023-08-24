const solution = (x) => {
  let answer;
  let value =
    x % Array.from(String(x)).reduce((a, b) => Number(a) + Number(b), 0);
  value === 0 ? (answer = true) : (answer = false);
  console.log();
  return answer;
};
console.log(solution());
