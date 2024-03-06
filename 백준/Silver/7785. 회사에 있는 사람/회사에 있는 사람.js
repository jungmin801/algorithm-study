const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const status = {};
const setMember = new Set();
for (let i = 1; i < input.length; i++) {
  const member = input[i].split(" ").map((el) => el.trim());
  status[member[0]] = member[1];
  setMember.add(member[0]);
}

const result = [];

[...setMember].forEach((name) => {
  if (status[name] === "enter") {
    result.push(name);
  }
});

result.sort().reverse();

let answer = "";
for (let value of result) {
  answer += value + "\n";
}

console.log(answer);
