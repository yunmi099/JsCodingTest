function solution(N, stages) {
  let answer = [];
  let failure = Array.from({ length: N }, () => 0);
  let result = Array.from({ length: N }, () => 0);
  for (let i = 1; i <= N; i++) {
    stages.forEach((el, idx) => {
      if (el === i) {
        failure[i - 1] += 1;
        result[i - 1] += 1;
      }

      if (el > i) {
        result[i - 1] += 1;
      }
    });
    if (result[i - 1] !== 0) {
      failure[i - 1] = failure[i - 1] / result[i - 1];
    }
  }
  for (let i = 1; i <= N; i++) {
    let a = failure.indexOf(Math.max(...failure));
    answer.push(a + 1);
    failure[a] = -1;
  }
  return answer;
}
console.log(solution(2, [1, 1, 1, 1]));

//  function solution(N, stages) {
//     let result = [];
//     for(let i=1; i<=N; i++){
//         let reach = stages.filter((x) => x >= i).length;
//         let curr = stages.filter((x) => x === i).length;
//         result.push([i, curr/reach]);
//     }
//     result.sort((a,b) => b[1] - a[1]);
//     return result.map((x) => x[0]);
// }
