const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const tc = Number(input.shift());
const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
]; // 현재 위치 기준 인접한 네 곳(좌우상하 xy좌표
let H, W, graph;

// 양의 무리를 카운트하는 함수
const howManyLambs = () => {
  let answer = 0;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (graph[i][j] === "#") {
        answer++;
        bfs(i, j);
      }
    }
  }
  console.log(answer);
};

// BFS
const bfs = (col, row) => {
  const queue = [[col, row]];
  while (queue.length) {
    const [cy, cx] = queue.shift();

    // 현재 위치(cy, cx) 기준 인접한 네 곳을 탐색하기 위한 반복문
    for (let i = 0; i < 4; i++) {
      const ny = cy + ds[i][1];
      const nx = cx + ds[i][0];

      // 해당 위치가 범위가 그래프 밖으로 벗어나지 않았고 양이 있는 경우(#)
      if (nx >= 0 && nx < W && ny >= 0 && ny < H && graph[ny][nx] === "#") {
        graph[ny][nx] = "."; // 방문 처리를 위해 해당 자리 '.'로 변경
        queue.push([ny, nx]); // 해당 위치 큐에 담기
      }
    }
  }
};

// 테스트 케이스가 여러 개인 경우 입력값 정제하기
for (let i = 0; i < input.length - 1; i++) {
  [H, W] = input[i].split(" ").map(Number);
  graph = input.slice(i + 1, i + H + 1).map((v) => v.split(""));
  i += H; // 인덱스에 H만큼 더해서 다음 케이스로 넘어가기
  howManyLambs(); // 양 무리 개수 세는 함수 호출하기
}
