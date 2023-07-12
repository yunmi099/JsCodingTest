const id_list = ["muzi", "frodo", "apeach", "neo"];
const report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
k = 2;
function solution(id_list, report, k) {
  report = [...new Set(report)];
  // []=> set => []
  var answer = Array.from({ length: id_list.length }, () => 0);
  let info = [];
  let result = [];
  let stopPeople = [];
  let count = Array.from({ length: id_list.length }, () => 0);
  //   report.forEach((el, idx) => info.push(el.split(" ")));
  info = report.map((key) => key.split(" "));
  console.log(info);

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
  console.log(result);
  result.map((key) => {
    if (Object.values(key) >= k) {
      stopPeople.push(Object.keys(key)[0]);
    }
  });

  stopPeople.map((key) => {
    info.forEach((el) => {
      el[1] === key ? (answer[id_list.indexOf(el[0])] += 1) : null;
    });
  });
  return answer;
}
