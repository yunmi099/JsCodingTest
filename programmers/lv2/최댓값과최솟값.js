const solution = (s) => {
  let arr = s.split(" ");
  arr = arr.map((item) => Number(item));
  let answer = [];
  answer.push(Math.min(...arr));
  answer.push(Math.max(...arr));
  return answer.join(" ");
};

console.log(solution("1 2 3 4"));
