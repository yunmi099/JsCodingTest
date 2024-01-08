let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(`\n`);
let data = input[0].split(" ");
let hour = Number(data[0]);
let min = Number(data[1]);
let time = 60 * hour + min;
let newTime = time - 45;
let newHour = parseInt(newTime / 60);
let newMin = parseInt(newTime % 60);

if (newTime < 0) {
  newHour = 24 + newHour - 1;
  newMin = 60 + newMin;
  console.log(newHour, newMin);
} else {
  console.log(newHour, newMin);
}
