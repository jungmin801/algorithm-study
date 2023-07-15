function solution(n) {
    let numArr = [];
    let num = [...String(n)].forEach( a => numArr.push(parseInt(a)));
    return answer = numArr.reduce((acc, cur) => acc += cur);

    // n.toString()
    // String(n)
}

