function solution(n) {
    // return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
    
    let answer = 0;
    for(let i = 1; i < n/2; i++){
        if (i ** 2 === n) {
        answer = 1
        break;
        }
        else answer = 2;
     }
    return answer;
}