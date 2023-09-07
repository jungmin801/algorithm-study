function solution(d, budget) {
    let cnt = 0;
    let sum = 0;
    d.sort((a,b) => a-b);
    while(sum <= budget){
        sum += d[cnt];
        cnt++;
    }
    
    // for(let i=0; i<d.length; i++){
    //     sum += d[i];
    //     if(sum > budget) break;
    //     else cnt++;
    // }
    
    return cnt-1;
}