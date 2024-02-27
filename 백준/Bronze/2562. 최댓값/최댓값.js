const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const max = Math.max(...input);
const index = input.indexOf(max) + 1;

console.log(max + "\n" + index);
