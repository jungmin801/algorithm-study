const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const repeatTime = parseInt(input.shift());
const cases = input.map((el) => el.split(" ").map((el) => parseInt(el)));

for (let i = 0; i < cases.length; i++) {
  console.log(cases[i][0] + cases[i][1]);
}
