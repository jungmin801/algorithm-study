const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const number = parseInt(input);
let str = "";
if (number % 4 === 0) {
  const cnt = parseInt(number / 4);
  for (let i = 1; i <= cnt; i++) {
    str += "long ";
  }
}

console.log(str + "int");
