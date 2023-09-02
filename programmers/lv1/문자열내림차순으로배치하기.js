// function solution(s) {
//   let array1 = [];
//   let array2 = [];
//   array1 = [...s]
//     .filter((el) => el === el.toUpperCase())
//     .sort()
//     .reverse();
//   array2 = [...s]
//     .filter((el) => el !== el.toUpperCase())
//     .sort()
//     .reverse();
//   return array2.concat(array1).join("");
// }
function solution(s) {
  return s.split("").sort().reverse().join("");
}
console.log(solution("Zbcdefg"));
