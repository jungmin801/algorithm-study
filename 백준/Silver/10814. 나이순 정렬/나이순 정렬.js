const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = [];

for (let i = 1; i < input.length; i++) {
  const [age, name] = input[i].split(" ");
  arr.push([parseInt(age), name, i]);
}

arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[3] - b[3];
  } else {
    return a[0] - b[0];
  }
});

let answer = "";
for (let value of arr) {
  answer += `${value[0]} ${value[1]}\n`;
}

console.log(answer);
