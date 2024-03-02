const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

input.sort((a, b) => a - b);
const [a, b, c] = input;

if (a + b > c) {
  console.log(a + b + c);
} else {
  const d = a + b - 1;
  console.log(a + b + d);
}
