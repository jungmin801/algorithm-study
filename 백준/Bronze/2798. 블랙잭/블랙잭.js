const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const targetNumber = input[0].split(" ").map(Number)[1];
const cards = input[1].split(" ").map(Number);
const result = [];

for (let i = 0; i < cards.length - 2; i++) {
  for (let j = i + 1; j < cards.length - 1; j++) {
    for (let k = j + 1; k < cards.length; k++) {
      const sum = cards[i] + cards[j] + cards[k];
      if (sum <= targetNumber) {
        result.push(sum);
      }
    }
  }
}

const answer = Math.max(...result);
console.log(answer);
