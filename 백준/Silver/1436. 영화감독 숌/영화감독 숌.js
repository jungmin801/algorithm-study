const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let targetNumber = parseInt(input);
let cnt = 0;
let num = 0;
while (cnt < targetNumber) {
  num++;
  const length = num.toString().split("666").length;
  if (length >= 2) {
    cnt++;
  }
}

console.log(num);
