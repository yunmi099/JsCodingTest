const solution = (s) => {
  let count = 0;
  let removeZeroCount = 0;
  let temp = "";
  while (s !== "1") {
    count++;
    temp = s;
    s = s.split("0").join("");
    let binaryNumber = s.length;
    removeZeroCount += temp.length - binaryNumber;
    let result = "";
    while (binaryNumber > 1) {
      result = result + String(binaryNumber % 2);
      binaryNumber = Math.floor(binaryNumber / 2);
    }
    s = "1" + [...result].reverse().join("");
  }
  return [count, removeZeroCount];
};
console.log(solution("1111111"));
