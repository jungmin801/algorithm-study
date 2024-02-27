const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const number = parseInt(input);

for (let i = 1; i <= 9; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}
