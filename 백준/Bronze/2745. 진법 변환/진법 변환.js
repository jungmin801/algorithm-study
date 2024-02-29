const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");
const B = parseInt(input[1]);
console.log(parseInt(input[0], B));
