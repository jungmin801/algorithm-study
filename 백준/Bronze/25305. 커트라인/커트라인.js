const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [total, prize] = input[0].split(" ").map(Number);
const score = input[1].split(" ").map(Number);
score.sort((a, b) => b - a);

console.log(score[prize - 1]);
