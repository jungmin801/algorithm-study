const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const row = parseInt(input);

for (let i = 1; i <= row; i++) {
  const star = " ".repeat(row - i) + "*".repeat(i);
  console.log(star);
}
