const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const currentTime = input[0].split(" ").map((el) => parseInt(el));
const period = parseInt(input[1]);
const currentTimeInMinutes = parseInt(currentTime[0] * 60 + currentTime[1]);
let calcTime = currentTimeInMinutes + period;
const day = 24 * 60;

if (calcTime >= day) {
  calcTime = calcTime - day;
}

const newHour = parseInt(calcTime / 60);
const newMinute = parseInt(calcTime % 60);
console.log(`${newHour} ${newMinute}`);
