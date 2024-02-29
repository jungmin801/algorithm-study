const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");
const B = parseInt(input[1]);
const num = parseInt(input[0]);

console.log(num.toString(B).toUpperCase());
