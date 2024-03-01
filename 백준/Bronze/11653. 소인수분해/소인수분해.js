const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let num1 = parseInt(input);
let num2 = 2;
while (num1 > 1) {
  if (num1 % num2 === 0) {
    num1 = parseInt(num1 / num2);
    console.log(num2);
  } else {
    num2++;
  }
}
