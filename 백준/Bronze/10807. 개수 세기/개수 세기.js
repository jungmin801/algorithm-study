const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const nums = input[1].split(" ").map(Number);
const target = parseInt(input[2]);

const answer = nums.filter((el) => el === target).length;
console.log(answer);
