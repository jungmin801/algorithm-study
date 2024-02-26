const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((el) => parseInt(el));

const [a, b, c] = input;

if (a === b && a === c && a === b) {
  console.log(10000 + a * 1000);
} else if (a !== b && a !== c && b !== c) {
  const max = Math.max(a, b, c);
  console.log(100 * max);
} else {
  const cntA = input.filter((el) => el === a).length;
  if (cntA >= 2) {
    console.log(1000 + a * 100);
  } else {
    console.log(1000 + b * 100);
  }
}
