function solution(phone_number) {
  let answer = [...phone_number];
  answer.splice(
    0,
    phone_number.length - 4,
    "*".repeat(phone_number.length - 4)
  );
  return answer.join("");
}

function hide_numbers(s) {
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  return result;
} //다른방법

const solution = (n) => [...n].fill("*", 0, n.length - 4).join("");
