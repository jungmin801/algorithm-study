const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let amount = parseInt(input);
let answer = 0;

while (amount > 2) {
  if (amount % 5 === 0) {
    amount -= 5;
  } else {
    amount -= 3;
  }
  answer++;
}

if (amount !== 0) {
  console.log(-1);
} else {
  console.log(answer);
}
