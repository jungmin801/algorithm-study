function solution(hp) {
    let cnt = 0;
    for(let i = 5; i >= 1; i -= 2){
        cnt += parseInt(hp / i);
        hp = parseInt(hp % i);
    }
    return cnt;
}