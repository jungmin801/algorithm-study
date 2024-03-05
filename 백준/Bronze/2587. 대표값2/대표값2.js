const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const average = parseInt(
  input.reduce((acc, cur) => (acc += cur)) / input.length
);
input.sort((a, b) => a - b);

console.log(average);
console.log(input[2]);
