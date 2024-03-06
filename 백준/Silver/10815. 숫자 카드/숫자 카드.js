const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const ownNumber = input[1].split(" ").map(Number);
const targetNumber = input[3].split(" ").map(Number);
const obj = {};

ownNumber.forEach((el) => {
  obj[el] = el;
});

let answer = "";
targetNumber.forEach((el) => {
  if (obj[el]) {
    answer += "1" + " ";
  } else {
    answer += "0" + " ";
  }
});

console.log(answer);
