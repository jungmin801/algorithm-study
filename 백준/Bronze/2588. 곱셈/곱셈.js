const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const firstNum = parseInt(input[0]);

const firstLine = firstNum * parseInt(input[1][2]);
const secondLine = firstNum * parseInt(input[1][1]);
const thirdLine = firstNum * parseInt(input[1][0]);
const sum = firstLine + secondLine * 10 + thirdLine * 100;

console.log(firstLine);
console.log(secondLine);
console.log(thirdLine);
console.log(sum);
