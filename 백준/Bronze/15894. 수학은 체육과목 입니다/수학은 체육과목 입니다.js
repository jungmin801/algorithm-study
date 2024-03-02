const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const square = parseInt(input);
const answer = square * 3 + square;
console.log(answer);
