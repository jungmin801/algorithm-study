const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((el) => parseInt(el));

const day = 24 * 60;
const minutes = input[0] * 60 + input[1];
let calcTime = minutes - 45;

if (calcTime < 0) {
  calcTime = day + calcTime;
}

const newHour = parseInt(calcTime / 60);
const newMinute = parseInt(calcTime % 60);

console.log(`${newHour} ${newMinute}`);
