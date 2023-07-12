let num1 = [1, 2, 3, 4, 5];
let num2 = [2, 1, 2, 3, 2, 4, 2, 5];
let num3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
function solution(answers) {
  let answer = [];
  let check = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === num1[i % num1.length]) {
      check[0] += 1;
    }
    if (answers[i] === num2[i % num2.length]) {
      check[1] += 1;
    }
    if (answers[i] === num3[i % num3.length]) {
      check[2] += 1;
    }
  }
  check.forEach((el, idx) => {
    // console.log(el);
    el === Math.max(...check) ? answer.push(idx + 1) : null;
  });
  return answer.sort();
}
console.log(solution([1, 3, 2, 4, 2]));
