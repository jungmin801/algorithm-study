const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

let memo = {};

function fibonacci(n) {
  let result;
  if (n in memo) {
    result = memo[n];
  } else {
    if (n <= 1) result = n;
    else {
      result = fibonacci(n - 1) + fibonacci(n - 2);
    }
    memo[n] = result;
  }

  return result;
}

const answer = fibonacci(parseInt(input));
console.log(answer);
