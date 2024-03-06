const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [x, y] = input[0].split(" ").map(Number);
const A = {};
const B = {};
input[1]
  .split(" ")
  .map(Number)
  .forEach((num) => (A[num] = num));

input[2]
  .split(" ")
  .map(Number)
  .forEach((num) => (B[num] = num));

const keyOfB = Object.keys(B);
const keyOfA = Object.keys(A);
const copyA = { ...A };
const copyB = { ...B };

keyOfB.forEach((num) => {
  if (copyA[num]) {
    delete copyA[num];
  }
});

keyOfA.forEach((num) => {
  if (copyB[num]) {
    delete copyB[num];
  }
});

const answer = Object.keys(copyA).length + Object.keys(copyB).length;
console.log(answer);
