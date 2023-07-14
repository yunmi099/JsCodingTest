let input_string = "edeaaabbccd";
function solution(input_string) {
  let kindOfString = [...new Set([...input_string])];
  let answer = [];
  [...input_string].reduce((a, b) => {
    if (a !== b) {
      console.log(a, b);
      answer.push(a);
      return b;
    } else {
      console.log(a, b);
      return a;
    }
  });
  return answer.sort().join("");
}
console.log(solution(input_string));
