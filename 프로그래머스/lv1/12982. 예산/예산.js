
function solution(d, budget) {
    let cnt = 0;
    let sum = 0;
    d.sort((a,b) => a-b);
    for(cnt; cnt<d.length; cnt++){
        sum += d[cnt];
        if(sum > budget) break;
    }
    
    return cnt;
}