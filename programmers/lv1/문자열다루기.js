const solution = (s) => {
  for (let item of [...s]) {
    if ("a" <= item.toLowerCase() && item.toLowerCase() <= "z") {
      return false;
    }
  }
  return s.length === 4 || s.length === 6;
};
console.log(solution("a123"));
