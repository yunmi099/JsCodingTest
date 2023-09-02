// function solution(left, right) {
//   var answer = 0;
//   let array = Array.from(
//     { length: Math.abs(left - right) + 1 },
//     () => new Array()
//   );
//   let count = 0;
//   for (let j = left; j <= right; j++) {
//     for (let i = 1; i <= j; i++) {
//       j % i === 0 ? array[count].push(i, j / i) : null;
//     }
//     count += 1;
//   }
//   array.map((key, index) => {
//     array[index] = Array.from(new Set(key));
//     array[index].length % 2 === 0
//       ? (answer += Math.max(...key))
//       : (answer -= Math.max(...key));
//   });
//   return answer;
// }
// console.log(solution(1, 2));
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
solution(13, 17);
