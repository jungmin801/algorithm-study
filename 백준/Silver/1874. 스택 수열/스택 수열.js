const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input[0];
const stack = [];
const result = [];
let cnt = 0;
let i = 1;
let possible = true;

do {
  if (stack[stack.length - 1] === input[i]) {
    stack.pop();
    result.push("-");
    i++;
  } else {
    if (cnt === N) {
      possible = false;
      break;
    }
    cnt++;
    stack.push(cnt);
    result.push("+");
  }
} while (cnt <= N && i < input.length);

if (possible) {
  console.log(result.join("\n"));
} else {
  console.log("NO");
}
