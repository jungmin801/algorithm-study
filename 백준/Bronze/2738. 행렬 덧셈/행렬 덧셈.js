const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [row, cnt] = input[0].split(" ").map(Number);
const arr1 = [];
const arr2 = [];
for (let i = 1; i < input.length; i++) {
  const split = input[i].split(" ").map(Number);
  if (i <= row) {
    arr1.push(split);
  } else {
    arr2.push(split);
  }
}

for (let i = 0; i < arr1.length; i++) {
  let sum = "";
  for (let j = 0; j < cnt; j++) {
    sum += arr1[i][j] + arr2[i][j] + " ";
  }
  console.log(sum);
}
