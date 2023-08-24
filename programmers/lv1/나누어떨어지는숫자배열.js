function solution(arr, divisor) {
  var answer = [];
  arr.map((key, index) => {
    key % divisor === 0 && answer.push(key);
  });
  if (answer.length === 0) {
    answer.push(-1);
  }
  return answer.sort((a, b) => a - b);
}
// answer.sort()
console.log(solution([2, 36, 1, 3], 1));
