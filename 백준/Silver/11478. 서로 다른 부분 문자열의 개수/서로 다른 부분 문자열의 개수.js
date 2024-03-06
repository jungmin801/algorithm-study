const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const set = new Set();

// i는 자를 개수
for (let i = 1; i <= input.length; i++) {
  // j는 input의 길이
  for (let j = 0; j + i <= input.length; j++) {
    const word = input.substring(j, j + i);
    set.add(word);
  }
}

console.log(set.size);
