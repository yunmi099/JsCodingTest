const solution = (s) => {
  let answer;
  let string = Array.from(s);
  let p = 0;
  let y = 0;
  for (let i of string) {
    if (i.toUpperCase() === "P") {
      p += 1;
    } else if (i.toUpperCase() === "Y") {
      y += 1;
    }
  }
  if (p === y) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
};
console.log(solution("pPoooyY"));
