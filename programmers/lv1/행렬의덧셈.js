function solution(arr1, arr2) {
  var answer = [];
  arr1.map((item, index) => {
    answer.push([]);
    item.map((value, idx) => {
      answer[index].push(Number(value) + Number(arr2[index][idx]));
    });
  });
  return answer;
}
console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
