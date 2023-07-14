k = 80;
dungeons = [
  [80, 20],
  [50, 40],
  [30, 10],
];
function solution(k, dungeons) {
  let number = dungeons.length;
  let graph = Array.from({ length: number + 1 }, () => []);
  for (let i = 1; i <= number; i++) {
    dungeons.map((key, idx) => {
      if (i !== 0 && idx + 1 !== i) {
        graph[i].push(idx + 1); // 그래프에 던전 추가
      }
    });
  }
  let result = 0;
  let visited = [];
  const dfs = (x, K, level) => {
    let remain;
    if (visited[x] === -1) {
      if (K >= dungeons[x - 1][0]) {
        level++;
        visited[x] = 1;
        remain = K - dungeons[x - 1][1];
        graph[x].map((key) => dfs(key, remain, level));
        visited[x] = -1;
      }
    }
    result = Math.max(result, level);
  };
  for (let i = 1; i <= number; i++) {
    visited = Array.from({ length: number + 1 }, () => -1);
    dfs(1, k, 0);
  }
  return result;
}

console.log(solution(k, dungeons));
