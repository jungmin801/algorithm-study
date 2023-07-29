function solution(n) {
    // 1. for문으로 (6*i) % n 을 돌린다.
    // 2. 나머지가 0인 i가 답!
    
    let answer = 0;
    for(let i=1; i<=50; i++){
        if( (6*i) % n === 0) return answer = i;
    }
    return answer;
}