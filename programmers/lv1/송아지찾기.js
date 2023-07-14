const solution = (s, e) => {
  let count = 0;
  if (e - s > 0) {
    a = Math.floor((e - s) / 5) + ((e - s) % 5);
    b = Math.round((e - s) / 5) + 5 - ((e - s) % 5);
    count = Math.min(a, b);
  } else {
    console.log(s - e);
    count = s - e;
  }
  return count;
};

s = 5;
e = 14;
console.log(solution(s, e));
