const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();

const stack = [];
const result = [];

for (let i = 0; i < input.length; i++) {
  const query = input[i].split(" ").map(Number);

  if (query[0] === 1) {
    stack.push(query[1]);
  } else if (query[0] === 2) {
    if (stack.length > 0) {
      const lastNum = stack[stack.length - 1];
      stack.pop();
      result.push(lastNum);
    } else {
      result.push(-1);
    }
  } else if (query[0] === 3) {
    result.push(stack.length);
  } else if (query[0] === 4) {
    if (stack.length > 0) {
      result.push(0);
    } else {
      result.push(1);
    }
  } else if (query[0] === 5) {
    if (stack.length > 0) {
      result.push(stack[stack.length - 1]);
    } else {
      result.push(-1);
    }
  }
}

console.log(result.join("\n"));
