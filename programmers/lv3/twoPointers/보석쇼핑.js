const gems = ["A", "B", "C", "B", "F", "D", "A", "F", "B", "D", "B"];
function solution(gems) {
  let complete = [...new Set(gems)].length;
  let end = 0;
  let result = [1, gems.length];
  let start = 0;
  while (end < gems.length) {
    let jewel = [];
    jewel = gems.slice(start, end + 1);
    if ([...new Set(jewel)].length === complete) {
      result[1] - result[0] > end - start
        ? (result = [start + 1, end + 1])
        : null;
      start += 1;
    } else {
      end++;
    }
  }

  return result;
}

console.log(solution(gems));
