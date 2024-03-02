const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const cnt = parseInt(input[0]);
const arrX = [];
const arrY = [];

for (let i = 1; i < input.length; i++) {
  const split = input[i].split(" ").map(Number);

  arrX.push(split[0]);
  arrY.push(split[1]);
}

arrX.sort((a, b) => a - b);
arrY.sort((a, b) => a - b);

if (cnt.length < 2) {
  console.log(0);
} else {
  const x = arrX[arrX.length - 1] - arrX[0];
  const y = arrY[arrY.length - 1] - arrY[0];

  console.log(x * y);
}
