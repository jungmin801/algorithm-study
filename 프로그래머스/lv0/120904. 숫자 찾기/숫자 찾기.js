function solution(num, k) {
    let answer = [...String(num)].map(a => parseInt(a)).indexOf(k);
    return answer >= 0 ? answer + 1 : -1;
}