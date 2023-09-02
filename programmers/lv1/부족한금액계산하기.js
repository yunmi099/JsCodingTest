const solution = (price, money, count) => {
  return Math.max(price * (((1 + count) * count) / 2) - money, 0);
};
console.log(solution(3, 20, 4));
