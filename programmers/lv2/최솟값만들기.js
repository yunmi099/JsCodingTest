const solution = (A, B) => {
  let arr1 = A.sort((a, b) => a - b);
  let arr2 = B.sort((a, b) => b - a);
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i] * arr2[i];
  }
  return sum;
};
console.log(solution([1, 4, 2], [5, 4, 4]));
