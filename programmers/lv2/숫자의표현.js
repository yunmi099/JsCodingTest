const solution1 = (n) => {
  let answer = 0;
  let length = n;
  let visited = new Array(n + 1).fill(false);
  const dfs = (current) => {
    if (!visited[current] && current <= n) {
      n = n - current;
      visited[current] = true;
      if (n === 0) {
        visited[current] = false;
        n = length;
        answer += 1;
      } else if (n < 0) {
        visited[current] = false;
        n = length;
      } else {
        dfs(current + 1, visited);
      }
    }
  };
  for (let i = 1; i <= length / 2; i++) {
    visited = new Array(n + 1).fill(false);
    n = length;
    dfs(i);
  }
  return answer + 1;
};
function solution(n) {
  let answer = 0;
  let start = 1;
  let end = 1;
  let sum = 1;

  while (start <= n / 2) {
    if (sum === n) {
      answer += 1;
      sum -= start;
      start += 1;
    } else if (sum > n) {
      sum -= start;
      start += 1;
    } else {
      end += 1;
      sum += end;
    }
  }

  return answer + 1;
}
console.log(solution(15));
