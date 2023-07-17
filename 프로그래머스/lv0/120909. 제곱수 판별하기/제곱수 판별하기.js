function solution(n) {
    // return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
    
    let answer = 2;
    for(let i = 1; i < n/2; i++){
        if (i ** 2 === n) {
        return answer = 1
        }
     }
    return answer;
}