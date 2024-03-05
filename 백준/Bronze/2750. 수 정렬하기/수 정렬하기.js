const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

// 삽입정렬
// 1. 두번째 요소를 를 선택하여 루프를 시작한다.
// 2. 두번째 요소와 이전 요소를 비교하여 작은 경우에는 서로 교체
// 3. 반복

for (let i = 1; i < input.length; i++) {
  let currentValue = input[i];
  let j;
  for (j = i - 1; j >= 0 && input[j] > currentValue; j--) {
    input[j + 1] = input[j];
  }
  input[j + 1] = currentValue;
}

for (let value of input) {
  console.log(value);
}
