function solution(n, t) {
    let cnt = n;
    for(let i = 1; i <= t ; i++){
        cnt *= 2; 
    }
    return cnt; 
}