const solution = (my_string) =>
  [...my_string].filter((el, idx, arr) => idx === arr.indexOf(el)).join("");
// indexOf 함수는, 문자열(string)에서 특정 문자열(searchvalue)을 찾고,
// 검색된 문자열이 '첫번째'로 나타나는 위치 index를 리턴합니다. 따라서 중복된 문자를 제거할 수 있다.
console.log(solution("people"));
//set()을 사용해서 중복 제거
const solution2 = (my_string) => [...new Set(my_string)].join("");

//reduce()와 includes()를 이용한 중복 제거
const solution3 = (my_string) =>
  [...my_string].reduce((acc, cur) => {
    acc.includes(cur) ? null : (acc += cur);
    return acc;
  }, "");
