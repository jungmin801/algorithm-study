function solution(hp) {
    let cnt = 0;
    for(let i = 5; i >= 1; i -= 2){
        cnt += parseInt(hp / i);
        hp = parseInt(hp % i);
    }
    return cnt;
    
//     cnt += parseInt(hp / 5)
//     remain = parseInt(hp % 5)
    
//     cnt += parseInt(remain / 3 )
//     remain = parseInt(remain % 3 )
    
//     cnt += parseInt(remain / 1 )
//     remain = parseInt(remain % 1 )
    
//     console.log(cnt)
}