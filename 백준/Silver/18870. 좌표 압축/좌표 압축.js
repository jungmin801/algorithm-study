const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const num = input[1].split(" ").map(Number);
const set1 = new Set(num);
const arr = [...set1].sort((a, b) => a - b);
const result = {};

for (let i = 0; i < arr.length; i++) {
  result[arr[i]] = i;
}

let answer = "";
for (let value of num) {
  answer += result[value] + " ";
}

console.log(answer);
