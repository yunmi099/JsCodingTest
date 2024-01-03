function solution(arr) {
  let answer = [];
  arr.reduce((a, b) => {
    if (a === b) {
      return a;
    } else {
      answer.push(a);
      return b;
    }
  });
  if (answer[answer.length - 1] !== arr[arr.length - 1]) {
    answer.push(arr[arr.length - 1]);
  }
  return answer;
}

function solution2(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

// reduce는 코드를 더 간결하게 만들 수 있지만, 추가 로직이 필요하여 반복문이 더 시간 복잡도가 낮을 수 있다.
// push 연산을 최대한 줄여야 코드의 효율성이 증가된다.
