function solution(k, m, score) {
    score.sort((a,b) => b-a);
    
    let outerArr=[];
    let lastIndex = m;
    
    for(let i=0; i < score.length; i += m){
        let slice = score.slice(i,lastIndex);
        if(slice.length >= m) {
            outerArr.push(slice);
        }
        lastIndex += m;
    }
    
    let totalPrice = 0;
    outerArr.forEach((innerArr) => {
        let min = Math.min(...innerArr);
        totalPrice += min * m;
    })

    return totalPrice
}