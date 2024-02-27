const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const target = parseInt(input[0].split(" ")[1]);
const numArr = input[1].split(" ").map(Number);

const answer = numArr.filter((el) => el < target);

console.log(...answer);
