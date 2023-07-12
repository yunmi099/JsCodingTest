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
  const userList = id_list.reduce((result, currentId) => {
    console.log(currentId);
    result[currentId] = [0, []];
    return result;
  }, {}); // , 뒤는 초기값 제공
  for (const id of new Set(report)) {
    const [REPORT_ID, ID] = id.split(" ");
    userList[REPORT_ID][1].push(ID);
    userList[ID][0]++;
  }
  const banned = id_list.filter((id) => userList[id][0] >= k);
  const emailList = id_list.map((id) => {
    return userList[id][1].filter((id) => {
      return banned.includes(id);
    }).length;
  });
  return emailList;
}
console.log(solution(id_list, report, k));
