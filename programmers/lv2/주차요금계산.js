let fees = [180, 5000, 10, 600];
let records = [
  "05:34 5961 IN",
  "06:00 0000 IN",
  "06:34 0000 OUT",
  "07:59 5961 OUT",
  "07:59 0148 IN",
  "18:59 0000 IN",
  "19:09 0148 OUT",
  "22:59 5961 IN",
  "23:00 5961 OUT",
];
function solution(fees, records) {
  var answer = [];
  let info = records.map((key) => key.split(" "));
  let userInfo = info.reduce((userInfo, currents) => {
    userInfo[currents[1]] = [];
    return userInfo;
  }, {});
  info.map((key) => {
    userInfo[key[1]].push(key[0]);
  });
  let fee = {};
  console.log(userInfo);
  Object.keys(userInfo).map((el, idx) => {
    let tempFee = 0;
    let time = 0;
    if (userInfo[el].length % 2 === 0) {
      for (let i = 0; i < userInfo[el].length; i += 2) {
        time +=
          Number(userInfo[el][i + 1].substring(0, 2)) * 60 +
          Number(userInfo[el][i + 1].substring(3, 5)) -
          Number(userInfo[el][i].substring(0, 2)) * 60 -
          Number(userInfo[el][i].substring(3, 5));
      }
    } else {
      for (let i = 0; i < userInfo[el].length; i += 2) {
        if (i + 1 < userInfo[el].length) {
          time +=
            Number(userInfo[el][i + 1].substring(0, 2)) * 60 +
            Number(userInfo[el][i + 1].substring(3, 5)) -
            Number(userInfo[el][i].substring(0, 2)) * 60 -
            Number(userInfo[el][i].substring(3, 5));
        }
      }
      time +=
        23 * 60 +
        59 -
        Number(userInfo[el][userInfo[el].length - 1].substring(0, 2)) * 60 -
        Number(userInfo[el][userInfo[el].length - 1].substring(3, 5));
    }
    if (time - fees[0] < 0) {
      tempFee = fees[1];
    } else {
      tempFee = fees[1] + Math.ceil((time - fees[0]) / fees[2]) * fees[3];
    }
    fee = { ...fee, [el]: tempFee };
  });
  Object.keys(fee)
    .sort()
    .map((key) => {
      answer.push(fee[key]);
    });
  return answer;
}
console.log(solution(fees, records));
