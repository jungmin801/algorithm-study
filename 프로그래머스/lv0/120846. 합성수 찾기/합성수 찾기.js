function solution(n) {
    let cnt = 0;
    for(let i=4; i<=n; i++){
        for(let j=2; j<i; j++){
            if(i%j === 0) {
                cnt += 1;
                break;
            }
        }
    }
    return cnt;
}