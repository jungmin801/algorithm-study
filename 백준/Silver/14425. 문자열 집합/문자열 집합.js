const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const num = parseInt(input[0].split(" ")[0]);
const obj1 = {};
const targetNumber = [];

for (let i = 1; i < input.length; i++) {
  const word = input[i].trim();
  if (i <= num) {
    obj1[word] = word;
  } else {
    targetNumber.push(word);
  }
}

let cnt = 0;

targetNumber.forEach((word) => {
  if (obj1[word]) cnt++;
});

console.log(cnt);
