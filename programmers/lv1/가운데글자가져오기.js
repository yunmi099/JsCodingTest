const solution = (s) => {
  let length = s.length;
  return s.substr(Math.ceil(length / 2) - 1, length % 2 === 0 ? 2 : 1);
};
console.log(solution("abcde"));
