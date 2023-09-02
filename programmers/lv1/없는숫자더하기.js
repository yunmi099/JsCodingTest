const solution = (numbers) => {
  let answer = [];
  let complete = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  complete.map((key) => {
    numbers.includes(key) ? null : answer.push(key);
  });
  return answer.reduce((a, b) => a + b);
};
