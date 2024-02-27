const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const totalPrice = parseInt(input[0]);
let sumPrice = 0;
for (let i = 2; i < input.length; i++) {
  const product = input[i].split(" ").map((el) => parseInt(el));
  sumPrice += product[0] * product[1];
}
if (totalPrice === sumPrice) {
  console.log("Yes");
} else {
  console.log("No");
}
