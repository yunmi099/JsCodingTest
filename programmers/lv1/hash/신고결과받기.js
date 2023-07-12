function solution(id_list, report, k) {
  report = [...new Set(report)];
  var answer = Array.from({ length: id_list.length }, () => 0);
  let info = [];
  let result = [];
  let stopPeople = [];
  let count = Array.from({ length: id_list.length }, () => 0);
  report.forEach((el, idx) => info.push(el.split(" ")));
  id_list.forEach((el, idx) => {
    info.forEach((key) => {
      if (key[1] === el) {
        result.map((k, index) => {
          Object.keys(k)[0] === key[1] ? result.splice(index, 1) : null;
        });
        result.push({ [key[1]]: (count[idx] += 1) });
      }
    });
  });
  result.map((key, index) => {
    if (Object.values(key) >= k) {
      stopPeople.push(Object.keys(key)[0]);
    }
  });

  stopPeople.map((key, index) => {
    info.forEach((el) => {
      el[1] === key ? (answer[id_list.indexOf(el[0])] += 1) : null;
    });
  });
  return answer;
}
console.log(solution(id_list, report, k));
