const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const queue = [];
const remove = [];
const k = input[1];

for (let i = 1; i <= input[0]; i++) {
  queue.push(i);
}

while (queue.length > 0) {
  for (let i = 1; i < k; i++) {
    // K-1번 사람을 큐의 끝으로 이동
    queue.push(queue.shift());
  }
  remove.push(queue.shift());
}

console.log(`<${remove.join(", ")}>`);
