const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const numArr = input[1].split(" ").map(Number);
const min = Math.min(...numArr);
const max = Math.max(...numArr);

console.log(`${min} ${max}`);
