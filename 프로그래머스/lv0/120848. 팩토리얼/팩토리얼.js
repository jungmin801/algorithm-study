function solution(n) {
    // 1. 1부터 계속 누적해서 곱한다.
    // 2. 곱한 값과 n을 비교하여 n을 초과하게 되면 하나 전의 값이 답
    let answer = 1;
    let acc = 1;
    for(let i=1 ; i<=n; i++){
        acc *= i;
        if(acc > n) {
            answer = i-1
            break;
        }
        answer = i
    }
    return answer;
}